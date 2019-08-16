import DrawText from './drawTextV2'
import DrawImage from './drawImage'

export default async function (ctx, tCtx, props) {
  const { fontFamily } = props;

  ctx.fillStyle = '#fff';
  ctx.save();


  await DrawText(
    {
      ctx,
      tCtx,
      ...props.texts[0],
    }
  );
  await DrawText(
    {
      ctx,
      tCtx,
      ...props.texts[1],
    }
  );
  await DrawImage({
    ctx,
    id: props.mascot
  });

  return new Promise(resolve => {
    ctx.restore();
    resolve('all are drown')
  });
}
