import DrawText from './drawTextV2'
import DrawImage from './drawImage'
import Outlined from './outlined'
import DrawImageOutline from './drawImageOutline'

export default async function (ctx, tCtx, props) {
  console.log('MainLayout props =', props);

  const { outline: {show: outlineShow}, } = props;
  // ctx.fillStyle = '#fff';
  // ctx.save();
  /* draw outlined TOP text*/
  (outlineShow && await Outlined(DrawText,
    {
      ctx,
      tCtx,
      ...props.texts[0],
      outline: props.outline,
    }
  ));

  /* draw outlined BOTTOM text*/
  (outlineShow && await Outlined(DrawText,
    {
      ctx,
      tCtx,
      ...props.texts[1],
      outline: props.outline,
    }
  ));

  (outlineShow && await DrawImageOutline({
    ctx,
    id: props.mascot,
    outline: props.outline,
  }));

  await DrawImage({
    ctx,
    id: props.mascot,
  });

  await DrawText(
    {
      ctx,
      tCtx,
      ...props.texts[0],
    }
  );
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

