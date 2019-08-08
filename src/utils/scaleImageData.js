function scaleImageData({ctx, imageData,  amplitude, curve}) {
  const halfWidth = imageData.width * 0.5;
  var scaled = ctx.createImageData(imageData.width, imageData.height + amplitude);
  for(var row = 0; row < imageData.height; row++) {
    for(var col = 0; col < imageData.width; col++) {
      var sourcePixel = [
        imageData.data[(row * imageData.width + col) * 4 + 0],
        imageData.data[(row * imageData.width + col) * 4 + 1],
        imageData.data[(row * imageData.width + col) * 4 + 2],
        imageData.data[(row * imageData.width + col) * 4 + 3]
      ];
      var delta = (col - halfWidth) / halfWidth;
      const dy = Math.round(amplitude * curve(delta) );
      var destRow = row + dy;
      scaled.data[(destRow * scaled.width + col) * 4 + 0] = sourcePixel[0];
      scaled.data[(destRow * scaled.width + col) * 4 + 1] = sourcePixel[1];
      scaled.data[(destRow * scaled.width + col) * 4 + 2] = sourcePixel[2];
      scaled.data[(destRow * scaled.width + col) * 4 + 3] = sourcePixel[3];
    }
  }

  return scaled;
}

export default scaleImageData