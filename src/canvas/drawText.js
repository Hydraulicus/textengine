import textMeasurer from '../utils/textmeasurer'
import scaleImageData from '../utils/scaleImageData'

export default function(
  {
    ctx,
    tCtx,
    text = '1234567890abcdefghihklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    fontSize = 80,
    // fontFamily = 'Arial',
    fontFamily = 'AtomicAge',
    width = 3400,
    offsetTop = 50,
    distortion = 0,
    lineWidth = 3,
    fillStyle = '#4444f1',

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
  // const XFactor = ctxWidth / designedWidth;
  const YFactor = ctxHeight / designedHeight;

  console.log(fontFamily);

  ctx.fillStyle = 'rgba(10,0,0, 0.05)';
  ctx.fillRect(0,0, ctxWidth, ctxHeight);

  /* detect scale factor to fit short text into box width */
  const {width: textWidth, height: textHeight} = textMeasurer({
    text,
    fontSize: `${YFactor * fontSize}px`,
    fontFamily
  });
  const scaleFActor = ( width/textWidth > 1 ) ? width/textWidth : 1;
  const renderFontSize = YFactor * fontSize * scaleFActor;
  // console.log(width, textHeight, textWidth, scaleFActor, 'renderFontSize =', renderFontSize);

  /* calculate height of text  */
  const {height} = textMeasurer({
    text,
    fontSize: `${renderFontSize}px`,
    // fontWeight: 'bold',
    fontFamily
  });
  // console.log('textHeight =', textHeight, 'height =', height);
  /* rect around the text */
  const coord = {
    x0: ctxWidth / 2 - width / 2,
    y0: 0,
    x: ctxWidth / 2,
    y: height,
  };

  // tCtx.textBaseline = 'bottom';
  tCtx.fillStyle = fillStyle;
  tCtx.lineWidth = lineWidth;
  // tCtx.rect(coord.x0, 0, width, height);
  tCtx.stroke();
  tCtx.textAlign = 'center';
  tCtx.font=`${YFactor * fontSize * scaleFActor}px ${fontFamily}`;

  // console.log(text, ' coord.x =',  coord.x, 'height =', height, ' font =', YFactor * fontSize * scaleFActor);

  tCtx.fillText(text, coord.x, height / 1.025, width);
  tCtx.strokeText(text, coord.x, height / 1.025, width);

  if (distortion !== 0 ) {
    const imageData = tCtx.getImageData(coord.x0-1, coord.y0-1, width+2, height + 2 * Math.abs(YFactor * distortion) );
    const scaledImageData = scaleImageData({ctx: tCtx, imageData, amplitude: YFactor * distortion, curve: x => x * x});
    tCtx.putImageData(scaledImageData, coord.x0-1, coord.y0-1);
  }

  const img = new Image();
  img.src = tCtx.canvas.toDataURL();
  tCtx.clearRect(0, 0, tCtx.canvas.width, tCtx.canvas.height);

  return new Promise(resolve => {
    img.onload = function (){
      ctx.drawImage(img, 0, 0 - YFactor * offsetTop, ctxWidth, height + 2* Math.abs(YFactor * distortion) + YFactor * offsetTop, 0, coord.y0, ctxWidth, textHeight + 2 * Math.abs(YFactor * distortion) + YFactor * offsetTop);
      resolve('drown')
    };
  });

}

