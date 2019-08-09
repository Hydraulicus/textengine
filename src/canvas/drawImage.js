import mascots from './../assets/logos'

export default function (
  {
    ctx,
    id = 'elephant'
  }
) {
  const img = new Image(ctx.canvas.width, ctx.canvas.height);
  img.src = mascots[id];

  return new Promise(resolve => {
    img.onload = function (){
      ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
      resolve('drown')
    };
  });
}