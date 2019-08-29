export default function (wrappedComp, props) {
  const {
    outline: {
      color = '#f00',
      lineWidth = 26
    } ,
    offsetTop,
    lineWidth: textLineWidth
  } = props;
  const newOffsetTop = offsetTop - lineWidth / 2;
  const newLineWidth = lineWidth + textLineWidth;
  const newProps = {
    ...props,
    fillStyle: color,
    strokeStyle: color,
    lineWidth: newLineWidth,
    offsetTop: newOffsetTop,
  };

  return wrappedComp(newProps)
}