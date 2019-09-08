import { deepFind } from '../../utils/index'

const getPropValues = (o, prop) =>
  (res => (JSON.stringify(o, (key, value) =>
    (key === prop && res.push(value), value)), res))([]);

const deconstructTextTree = (childrens, initProps) => {
  // console.log('============== deconstructTextTree =====================');
  // console.log(JSON.stringify(childrens, null, 2));
  // console.log('childrens=', childrens);

  // const filtered = JSON.parse(JSON.stringify(childrens, ['children', 'attributes', 'id', 'name', 'fill', 'stroke', 'stroke-width', 'font-family', 'font-size', 'transform', 'width', 'y'], 2));
  // console.log('filtered = ', JSON.stringify(filtered, 'none', 2));
  // console.log('flattenObject = ', flattenObject(filtered));

  const anicipatedProps = {
    'fill': 'none',
    'stroke': '#000',
    'stroke-width': 0,
    'font-size': 300,
    distortion: 0,
  };

  const addedProps = childrens.reduce(
    // const addedProps = filtered.reduce(
    (props, item, idx) => {
      switch (true) {

        case (/BORDERS/.test(item.attributes.id)) : {
          /* getting size and place of text */
          const {
            width,
            y: offsetTop
          } = item.attributes;
          return {
            ...props,
            ...(width && {width}), // if width is defined
            ...(offsetTop && {offsetTop}),
          }
        }

        case (/CONTENT/.test(item.attributes.id)) : {
          /* getting text options */
          // console.log(idx, 'CONTENT item', item);

          let fontFamily = getPropValues(item, "font-family")[0];

          fontFamily = fontFamily && fontFamily.replace(/[^a-zA-Z-]+/g, ''); /* extract letters and - */
          // fontFamily = fontFamily && fontFamily.replace(/[^w-]+/gi, ''); /* extract any single alphanumeric character or underscore and - */

          let fontSize = getPropValues(item, "font-size")[0];
          fontSize = fontSize && fontSize.replace(/[^\d.,]+/g, ''); /* extract digits only */

          let lineWidth = getPropValues(item, "stroke-width")[0] || 0;
          lineWidth = lineWidth && +lineWidth; /* make it numerical */

          const fillStyle = getPropValues(item, "fill")[0];
          const strokeStyle = getPropValues(item, "stroke")[0];

          return {
            ...props,
            ...(fontFamily && {fontFamily}), // if fontFamily is defined
            ...(fontSize && {fontSize}),
            // ...(lineWidth && {lineWidth}),
            lineWidth,
            ...(fillStyle && {fillStyle}),
            ...(strokeStyle && {strokeStyle}),
          }
        }

        case (/ARCBENDING/.test(item.attributes.id)) : {
          /* getting text bending options */
          let distortion = getPropValues(item, "height")[0];
          distortion = distortion && +distortion; /* make it numerical */
          return {
            ...props,
            ...(distortion && {distortion}), // if distortion is defined
          }
        }

        default: {
          return {...props}
        }

      }

    }
    ,initProps
  );

  return {
    ...initProps,
    ...anicipatedProps,
    ...addedProps
  }
};

const deconstructMascotTree = (childrens, initProps) => {
  // console.log('============== deconstructMascotTree =====================');
  // console.log(JSON.stringify(childrens, null, 2));
  const { attributes: {y, width, height} } = childrens;
  return {
    ...initProps,
    offsetTop: y,
    width,
    height
  }
}

export default JSONTemplate => {

  const {attributes: {viewBox}, children} = JSONTemplate;
  const templateStructure = deepFind(children, ['attributes','id'], "TEMPLATE") || [];


  const props = templateStructure.children.reduceRight(
    (props, item) => {
      // console.log( item, item.attributes.id, /TEXT/.test(item.attributes.id));

      switch (true) {
        case (/TEXT/.test(item.attributes.id)) : {
          const {texts = []} = props;
          texts.push(deconstructTextTree(item.children, {}));
          // console.log('return ', { ...props, texts}, texts);

          return { ...props, texts}

        }
        case (/MASCOTAREA/.test(item.attributes.id)) : {
          const {mascots = {}} = props;
          const { offsetTop, width, height } = (deconstructMascotTree(item, {}))
          return {
            ...props,
            mascots: {
              ...(offsetTop && {offsetTop}), // if distortion is defined
              ...(width && {width}), // if distortion is defined
              ...(height && {height}), // if distortion is defined
            },
          }
        }
        default:
          return { ...props}
      }

    },
    {}
  );

  const [, , width = 3600, height = 3600] = viewBox.split(' ');

  return {
    designedSize: {width, height},
    ...props
  }
}