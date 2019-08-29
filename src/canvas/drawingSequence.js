import DrawText from './drawTextV2'
import DrawImage from './drawImage'
import DrawImageOutline from './drawImageOutline'

export default async function (ctx, tCtx, props) {

  ctx.fillStyle = '#fff';
  ctx.save();

  await DrawText(
    {
      ctx,
      tCtx,
      ...props.texts[0],
    }
  );

  /* draw outlined BOTTOM text*/
  await outlined(DrawText,
    {
      ctx,
      tCtx,
      ...props.texts[1],
      outline: { color: '#990', lineWidth: 66 },
    }
  );

  await DrawImageOutline({
    ctx,
    id: props.mascot,
    outline: {
      color: '#990',
      lineWidth: 46
    },
  });

  await DrawImage({
    ctx,
    id: props.mascot,
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
    outline: {
      color = '#f00',
      lineWidth = 26
    } ,
    offsetTop,
    lineWidth: textLineWidth
  } = props;
  const newOffsetTop = offsetTop - lineWidth / 2;
  const newLineWidth = lineWidth + textLineWidth;
  const newProps = {
    ...props,
    fillStyle: color,
    strokeStyle: color,
    lineWidth: newLineWidth,
    offsetTop: newOffsetTop,
  };

  return wrappedComp(newProps)
}