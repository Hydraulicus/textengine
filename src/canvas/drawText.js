import textMeasurer from '../utils/textmeasurer'
import scaleImageData from '../utils/scaleImageData'

export default function(
  {
    ctx,
    tCtx,
    text = '1234567890abcdefghihklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    fontSize = 80,
    fontFamily = 'AtomicAge',
    width = 3400,
    offsetTop = 50,
    distortion = 0,
    lineWidth = 3,
    fillStyle = '#4444f1',
    strokeStyle = '#4444f1',

    designedSize = {
      width: 3600,
      height: 3600
    }
  }
) {

  const {
    // width: designedWidth,
    height: designedHeight } = designedSize;
  const { width: ctxWidth, height: ctxHeight } = ctx.canvas;
  const { width: tCtxWidth, height: tCtxHeight } = tCtx.canvas;
  const XFactor = ctxWidth / designedSize.width;
  const YFactor = ctxHeight / designedHeight;

  ctx.fillStyle = 'rgba(10,0,0, 0.05)';
  ctx.fillRect(0,0, ctxWidth, ctxHeight);

  /* detect scale factor to fit short text into box width */
  const {width: textWidth, height: textHeight} = textMeasurer({
    text,
    fontSize: `${YFactor * fontSize}px`,
    fontFamily
  });
  const scaleFActor = ( XFactor * width / textWidth > 1 ) ? XFactor * width / textWidth : 1;

  const scale_Y_FActor = ( YFactor * fontSize / textHeight > 1 ) ? YFactor * fontSize / textHeight : 1;
  // const scale_Y_FActor = 1;

  const renderFontSize = YFactor * fontSize * scaleFActor;

  console.log( 'scale_Y_FActor =', scale_Y_FActor, 'scaleFActor =', scaleFActor);

  console.log(XFactor * width, textHeight, textWidth, scaleFActor, 'renderFontSize =', renderFontSize);

  /* calculate height of text  */
  const {height, yOffset} = textMeasurer({
    text,
    fontSize: `${renderFontSize}px`,
    // fontWeight: 'bold',
    fontFamily
  });

  console.log('textHeight =', textHeight,' width =', width, ' ======> height =', height);
  /* rect around the text */
  const coord = {
    x0: ctxWidth / 2 - XFactor * width / 2,
    y0: 0,
    x: ctxWidth / 2,
    y: height/scale_Y_FActor + 3,
  };

  // tCtx.textBaseline = 'bottom';
  tCtx.strokeStyle = strokeStyle;
  tCtx.fillStyle = fillStyle;
  tCtx.lineWidth = lineWidth;
  tCtx.rect(coord.x0, 0, XFactor * width, height + 6);
  // tCtx.rect(coord.x0, 0, XFactor * width, 700);
  tCtx.stroke();
  tCtx.textAlign = 'center';
  tCtx.font=`${ YFactor * fontSize * scaleFActor }px ${fontFamily}`;

  console.log(text, ' coord.x =',  coord.x, 'height =', height, ' font =', YFactor * fontSize * scaleFActor, ' YFactor=', YFactor, 'scaleFActor=', scaleFActor);

  tCtx.fillText(text, coord.x, (height + 3), XFactor * width);
  tCtx.strokeText(text, coord.x, (height + 3), XFactor * width);

  if (distortion !== 0 ) {
    // const imageData = tCtx.getImageData(coord.x0-3, coord.y0-3, XFactor * width+6, height + 6 * Math.abs(YFactor * distortion) );
    // const scaledImageData = scaleImageData({ctx: tCtx, imageData, amplitude: scaleFActor * YFactor * distortion, curve: x => x * x});
    const imageData = tCtx.getImageData(coord.x0-3, coord.y0-3, XFactor * width+6, tCtxHeight );
    const scaledImageData = scaleImageData({ctx: tCtx, imageData, amplitude:  distortion / (tCtxHeight/ctxHeight), curve: x => x * x});

    tCtx.putImageData(scaledImageData, coord.x0-3, coord.y0-3);
  }

  const img = new Image();
  img.src = tCtx.canvas.toDataURL();
  // tCtx.clearRect(0, 0, tCtx.canvas.width, tCtx.canvas.height);

  return new Promise(resolve => {
    img.onload = function (){
      ctx.drawImage(img,
        0, 0 - YFactor * offsetTop * scaleFActor,
        // ctxWidth, height + 2* Math.abs(YFactor/scaleFActor * distortion) + YFactor * offsetTop,
        tCtxWidth, tCtxHeight,
        // tCtxWidth, height,
        0, 0,
        ctxWidth, ctxHeight
        // ctxWidth, (textHeight + 2 * Math.abs(YFactor/scaleFActor * distortion) + YFactor * offsetTop)
        // ctxWidth, (textHeight + 2 * Math.abs(YFactor/scaleFActor * distortion) + YFactor * offsetTop) * tCtxHeight/ctxHeight
      );
      resolve('drown')
    };
  });

}

