
export default function (
  {
    ctx,
    src,
    id
  }
) {
  const img = new Image(720,720);
  // // img.src = src;
  // img.src = './logo.svg';
  // // img.src = "http://upload.wikimedia.org/wikipedia/commons/d/d2/Svg_example_square.svg";
  // img.onload = function (){
  //   ctx.drawImage(img, 200, 300);
  // };
  ctx.drawImage(document.getElementById(id), 0, 0);

}