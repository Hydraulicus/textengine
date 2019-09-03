import { deepFind } from '../../utils/index'

const getPropValues = (o, prop) =>
  (res => (JSON.stringify(o, (key, value) =>
    (key === prop && res.push(value), value)), res))([]);

const deconstructTextTree = (childrens, initProps) => {
  console.log('============== deconstructTextTree =====================');
  console.log(JSON.stringify(childrens, null, 2));
  // console.log('childrens=', childrens);

  const filtered = JSON.parse(JSON.stringify(childrens, ['children', 'attributes', 'id', 'name', 'fill', 'stroke', 'stroke-width', 'font-family', 'font-size', 'transform', 'width', 'y'], 2));

  // console.log('filtered = ', JSON.stringify(filtered, 'none', 2));
  // console.log('flattenObject = ', flattenObject(filtered));

  const addedProps = childrens.reduce(
  // const addedProps = filtered.reduce(
    (props, item, idx) => {
      switch (true) {

        case (/BORDERS/.test(item.attributes.id)) : {
          const {
            width,
            // y: offsetTop
          } = item.attributes;
          return {
            ...props,
            ...(width && {width}), // if width is defined
            // ...(offsetTop && {offsetTop}),
          }
        }

        case (/CONTENT/.test(item.attributes.id)) : {

          console.log('item', item);


            let fontFamily = getPropValues(item, "font-family")[0];
            fontFamily = fontFamily && fontFamily.replace(/[^a-zA-Z]+/g, '');

            let fontSize = getPropValues(item, "font-size")[0];
            fontSize = fontSize && fontSize.replace(/[^0-9]+/g, '');

            const lineWidth = getPropValues(item, "stroke-width")[0];
            const strokeStyle = getPropValues(item, "stroke")[0];

          return {
            ...props,
            ...(fontFamily && {fontFamily}), // if fontFamily is defined
            ...(fontSize && {fontSize}), // if fontSize is defined
            ...(lineWidth && {lineWidth}),
            ...(strokeStyle && {strokeStyle}),
          }
        }

        default: {
          return {...props}
        }

      }


    }
    ,initProps
  );
console.log('addedProps =', addedProps);
  return { ...initProps, ...addedProps }
}


export default JSONTemplate => {

  const {attributes: {viewBox}, children} = JSONTemplate;
  const templateStructure = deepFind(children, ['attributes','id'], "TEMPLATE") || [];


  const props = templateStructure.children.reduce(
    (props, item) => {
      // console.log( item, item.attributes.id, /TEXT/.test(item.attributes.id));

      switch (true) {
        case (/TEXT/.test(item.attributes.id)) : {
          const {texts = []} = props
          // console.log('TEXT found!!!!!', item);
          // debugger
          texts.push(deconstructTextTree(item.children, {}));
          console.log('return ', { ...props, texts}, texts);

          return { ...props, texts}

        }
          break;
        case (/MASCOTAREA/.test(item.attributes.id)) : {

          const {mascots = []} = props
          // console.log('MASCOT found!!!!!', item);
          // mascots.push({m:'!'})

          return { ...props, mascots}
        }
          break;
        default:
          return { ...props}
      }

    },
    {}
  );

  const [, , width = 3600, height = 3600] = viewBox.split(' ');

  // console.log('EVENTIALLY props =', props);

  return {
    HQSize: {width, height},
    ...props
  }
}