import textMeasurer from '../utils/textmeasurer'
import scaleImageData from '../utils/scaleImageData'

export default function(
  {
    ctx,
    tCtx,
    text = '1234567890abcdefghihklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    fontSize = 80,
    fontFamily = 'PirataOne-Regular',
    width = 3400,
    offsetTop = 50,
    distortion = 0,
    lineWidth = 2,
    fillStyle = '#4444f1'
  }
) {

  console.log(ctx, tCtx);

  /* detect scale factor to fit short text into box width */
  const {width: textWidth, height: textHeight} = textMeasurer({
    text,
    fontSize: `${fontSize}px`,
    // fontWeight: 'bold',
    fontFamily
  });
  const scaleFActor = ( width/textWidth > 1 ) ? width/textWidth : 1;
  const renderFontSize = fontSize * scaleFActor;
  // console.log(width, textHeight, textWidth, scaleFActor, 'renderFontSize =', renderFontSize);
  // ctx.setTransform(2,0,0,1,0,0);

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
    x0: ctx.canvas.width / 2 - width / 2,
    y0: offsetTop,
    x: ctx.canvas.width / 2,
    y: height + offsetTop,
  };

  tCtx.textBaseline = "alphabetic";
  tCtx.fillStyle = fillStyle;
  tCtx.lineWidth = lineWidth;
  tCtx.rect(coord.x0, 0, width, height);
  tCtx.stroke();
  tCtx.textAlign = 'center';
  tCtx.font=`${fontSize * scaleFActor}px ${fontFamily}`;

  // console.log(' coord.x =',  coord.x, 'height =', height, ' font =', fontSize * scaleFActor);


  tCtx.fillText(text, coord.x, height, width);
  tCtx.strokeText(text, coord.x, height, width);

  const img = new Image();
  img.src = tCtx.canvas.toDataURL();
       tCtx.clearRect(coord.x0-1, coord.y0-1 - Math.abs( distortion ), width+2, height + Math.abs(distortion));
  img.onload = function (){
    ctx.drawImage(img, 0, 0, 3600, height , 0, coord.y0, 3600, textHeight);
    if (distortion !== 0 ) {
      const imageData = ctx.getImageData(coord.x0-1, coord.y0-1 - Math.abs( distortion ), width+2, height + Math.abs(distortion) );
      const scaledImageData = scaleImageData({ctx, imageData, amplitude: distortion, curve: x => x * x});
      ctx.putImageData(scaledImageData, coord.x0-1, coord.y0-1 - Math.abs( distortion ) );
    }
  };
  return this;

}

