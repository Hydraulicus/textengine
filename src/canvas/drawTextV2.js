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
    width: designedWidth,
    height: designedHeight } = designedSize;
  const { width: ctxWidth, height: ctxHeight } = ctx.canvas;
  // const { width: tCtxWidth, height: tCtxHeight } = tCtx.canvas;
  const XFactor = ctxWidth / designedWidth;
  const YFactor = ctxHeight / designedHeight;
  const leftPadding = (designedWidth - width) * XFactor / 2;

  // ctx.fillStyle = 'rgba(10,0,0, 0.05)';
  // ctx.fillRect(0,0, ctxWidth, ctxHeight);

  /* detect scale factor to fit short text into box width */
  const {width: textWidth, height: textHeight, yOffset} = textMeasurer({
    text,
    fontSize: `${YFactor * fontSize}px`,
    fontFamily
  });
  const scaleFActor = ( XFactor * width / textWidth > 1 ) ? XFactor * width / textWidth : 1;
  console.log('fontFamily=', fontFamily, 'fontSize=', fontSize, 'yOffset=', yOffset);
  // const scale_Y_FActor = ( YFactor * fontSize / textHeight > 1 ) ? YFactor * fontSize / textHeight : 1;
  // const renderFontSize = YFactor * fontSize * scaleFActor;
  // console.log( 'scale_Y_FActor =', scale_Y_FActor, 'scaleFActor =', scaleFActor);
  // console.log( XFactor * width / scaleFActor, textHeight, ' textWidth = ', textWidth, scaleFActor, 'renderFontSize =', renderFontSize);

  const coord = {
    x0: 0 + 3,
    y0: 0 + 3,
    x: textWidth + 6,
    y: textHeight + 6,
  };

  // tCtx.textBaseline = 'bottom';
  tCtx.strokeStyle = strokeStyle;
  tCtx.fillStyle = fillStyle;
  tCtx.lineWidth = lineWidth;

  /****** DRAW BOUNDARY OF THE TEXT ******/
  // tCtx.rect(coord.x0, coord.y0,  width * XFactor / scaleFActor + 3, textHeight + 3);

  tCtx.stroke();
  tCtx.textAlign = 'left';
  tCtx.font=`${ YFactor * fontSize }px ${fontFamily}`;

  // console.log(text, ' coord.x =',  coord.x, 'textHeight =', textHeight, ' font =', YFactor * fontSize * scaleFActor, ' YFactor=', YFactor, 'scaleFActor=', scaleFActor);

  tCtx.fillText(text, coord.x0, (textHeight + 3), XFactor * width);
  tCtx.strokeText(text, coord.x0, (textHeight + 3), XFactor * width);

  const amplitude = distortion * YFactor;

  if (distortion !== 0 ) {
    const imageData = tCtx.getImageData(coord.x0-3, coord.y0-3, XFactor * width / scaleFActor+6+3+3, textHeight+6+3 + 3 );
    const scaledImageData = scaleImageData({ctx: tCtx, imageData, amplitude, curve: x => x * x});
    tCtx.putImageData(scaledImageData, coord.x0-3, coord.y0-3);
  }

  const img = new Image();
  img.src = tCtx.canvas.toDataURL();
  tCtx.clearRect(0, 0, tCtx.canvas.width, tCtx.canvas.height);

  return new Promise(resolve => {
    img.onload = function (){
      ctx.drawImage(img,
        0, 0,
        width * XFactor / scaleFActor + 6 + 3, textHeight + 6 + 3 + 2 * Math.abs(amplitude),
        leftPadding, offsetTop * YFactor,
        width * XFactor, textHeight + 2 * Math.abs(amplitude)
      );
      resolve('drown')
    };
  });

}

