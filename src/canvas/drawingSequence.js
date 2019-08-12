import DrawText from './drawText'
import DrawImage from './drawImage'

export default async function (ctx, tCtx, props) {
  const { canva, fontFamily } = props;

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
      text: 'Top Sign'.toUpperCase(),
      fontSize: 1000, //designed size
      width: 0.85 * canva.width, //designed width = 3600
      offsetTop: 100, //designed size
      lineWidth: 6,
      fillStyle: '#226',
      distortion: 500, //designed size,
    }
  );
  await DrawText(
    {
      ctx,
      tCtx,
      fontFamily,
      text: 'Bottom Sign'.toUpperCase(),
      fontSize: 1000, //designed size
      width: 0.85 * canva.width, //designed width = 3600
      offsetTop: 2300, //designed size
      lineWidth: 6,
      fillStyle: '#226',
      distortion: -500, //designed size
    }
  );

  return new Promise(resolve => {
    ctx.restore();
    resolve('all are drown')
  });
}
