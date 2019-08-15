import DrawText from './drawTextV2'
import DrawImage from './drawImage'

export default async function (ctx, tCtx, props) {
  const { fontFamily } = props;

  ctx.fillStyle = '#fff';
  ctx.save();

  await DrawImage({
    ctx,
    id: props.mascot
  });

  await DrawText(
    {
      ctx,
      tCtx,
      fontFamily,
      ...props.texts[0],
    }
  );
  await DrawText(
    {
      ctx,
      tCtx,
      fontFamily,
      ...props.texts[1],
    }
  );

  return new Promise(resolve => {
    ctx.restore();
    resolve('all are drown')
  });
}
