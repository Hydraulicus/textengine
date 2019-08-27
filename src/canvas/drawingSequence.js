import DrawText from './drawTextV2'
import DrawImage from './drawImage'

export default async function (ctx, tCtx, props) {
  const { fontFamily } = props;

  ctx.fillStyle = '#fff';
  ctx.save();

  // await DrawText(
  //   {
  //     ctx,
  //     tCtx,
  //     ...props.texts[0],
  //   }
  // );


  /* draw outlined BOTTOM text*/
  await outlined(DrawText,
    {
      ctx,
      tCtx,
      ...props.texts[1],
      outline1: {color: '#f00', lineWidth: 26 } ,
      outline2: {color: '#ff0', lineWidth: 26 },
    }
  );

  await DrawImage({
    ctx,
    id: props.mascot
  });

  /* draw BOTTOM text*/
  await DrawText(
    {
      ctx,
      tCtx,
      ...props.texts[1],
    }
  );

  return new Promise(resolve => {
    ctx.restore();
    resolve('all are drown')
  });
}

function outlined(wrappedComp, props) {
  const {
    outline1: {
      color: fillStyle = '#f00',
      lineWidth: lineWidthInside
    } ,
    outline2: {
      color: strokeStyle = '#00f',
      lineWidth: lineWidthOuter
    },

    distortion,
    fontSize,
    offsetTop,
    width,
  } = props;

  const newFontSize = fontSize + lineWidthInside + lineWidthOuter;
  const newOffsetTop = offsetTop - lineWidthInside - lineWidthOuter;
  const newWidth = width + 2 * lineWidthInside + 2 * lineWidthOuter;
  const newDistortion = distortion - lineWidthInside - lineWidthOuter;

  const newProps = {
    ...props,
    fillStyle,
    strokeStyle,
    fontSize: newFontSize,
    lineWidth: lineWidthOuter,
    offsetTop: newOffsetTop,
    width: newWidth
  };

  return wrappedComp(newProps)
}