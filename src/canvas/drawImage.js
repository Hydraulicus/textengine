import mascots from './../assets/logos'

export default function (
  {
    ctx,
    mascots: {
      offsetTop,
      width,
      height,
      id,
    },
    designedSize: {
      width: designedWidth,
      height: designedHeight
    }
  }
) {

  const { width: ctxWidth, height: ctxHeight } = ctx.canvas;
  const XFactor = ctxWidth / designedWidth;
  const YFactor = ctxHeight / designedHeight;
  const leftPadding = (designedWidth - width) * XFactor / 2;

  // console.log(ctxHeight , designedHeight, YFactor);
  // console.log('offsetTop =', offsetTop, ' width =', width, ' height=', height);

  const img = new Image(ctx.canvas.width, ctx.canvas.height);
  img.src = mascots[id];

  return new Promise(resolve => {
    img.onload = function (){
      ctx.drawImage(img, leftPadding, offsetTop*YFactor, width*XFactor, height*YFactor);
      resolve('drown')
    };
  });
}