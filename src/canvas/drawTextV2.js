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
  const OFactor = Math.sqrt(XFactor * XFactor + YFactor * YFactor);


  const leftPadding = (designedWidth - width) * XFactor / 2;

  // ctx.fillStyle = 'rgba(10,0,0, 0.05)';
  // ctx.fillRect(0,0, ctxWidth, ctxHeight);

  /* detect scale factor to fit short text into box width */
  const {
    width: textWidth, height: textHeight,
    // yOffset
  } = textMeasurer({
    text,
    fontSize: `${YFactor * fontSize}px`,
    fontFamily
  });
  const scaleFActor = ( XFactor * width / textWidth > 1 ) ? XFactor * width / textWidth : 1;
  const scaledLineW = YFactor / scaleFActor * lineWidth / 2;
  // console.log('lineWidth=', lineWidth, 'offsetTop=', offsetTop, 'strokeStyle=', strokeStyle, 'scaleFActor=', scaleFActor, 'OFactor=', OFactor, 'yOffset=', yOffset);

  const relativeSize = {
    w: XFactor / scaleFActor * width,
    h: textHeight
  };

  const coord = {
    x0: 0,
    y0: scaledLineW,
    x: relativeSize.w,
    y: relativeSize.h,
  };

  // tCtx.textBaseline = 'bottom';
  tCtx.strokeStyle = strokeStyle;
  tCtx.fillStyle = fillStyle;

  /****** DRAW BOUNDARY OF THE TEXT ******/
  // tCtx.lineWidth = 1;
  // tCtx.strokeRect(coord.x0, coord.y0 + 1, coord.x-1, textHeight + scaledLineW);

  tCtx.lineWidth = OFactor / scaleFActor * lineWidth;
  tCtx.textAlign = 'left';
  tCtx.font=`${ YFactor * fontSize }px ${fontFamily}`;

  tCtx.fillText(text, coord.x0, (textHeight + scaledLineW ), XFactor * width);
  tCtx.strokeText(text, coord.x0, (textHeight + scaledLineW ), XFactor * width);

  const amplitude = distortion * YFactor;
  if (distortion !== 0 ) {
    const imageData = tCtx.getImageData(
      0, 0,
      relativeSize.w, relativeSize.h + Math.abs(amplitude)
    );
    const scaledImageData = scaleImageData({ctx: tCtx, imageData, amplitude, curve: x => x * x});
    tCtx.putImageData(scaledImageData, coord.x0, 0);
  }

  const img = new Image();
  img.src = tCtx.canvas.toDataURL();
  tCtx.clearRect(0, 0, tCtx.canvas.width, tCtx.canvas.height);

  return new Promise(resolve => {
    img.onload = function (){
      ctx.drawImage(img,
        0, 0,
        relativeSize.w, relativeSize.h + 2 * Math.abs(amplitude),
        leftPadding, offsetTop * YFactor,
        width * XFactor, textHeight + 2 * Math.abs(amplitude)
      );
      resolve('drown')
    };
  });
}

