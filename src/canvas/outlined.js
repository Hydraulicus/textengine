export default function (wrappedComp, props) {
  const {
    outline: {
      color = '#f00',
      lineWidth = 0
    } ,
    offsetTop,
    lineWidth: textLineWidth
  } = props;
  const newLineWidth = textLineWidth + lineWidth;
  const newOffsetTop = offsetTop - (lineWidth + 0*textLineWidth) / 2;
  const newProps = {
    ...props,
    fillStyle: color,
    strokeStyle: color,
    lineWidth: newLineWidth,
    offsetTop: newOffsetTop,
  };

  return wrappedComp(newProps)
}