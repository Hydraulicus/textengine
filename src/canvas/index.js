import { useState, useEffect, useRef } from 'react'
import DrawText from './drawText'
import DrawImage from './drawImage'

export async function draw(ctx, tCtx, props) {
  const { canva } = props;

  ctx.fillStyle = '#fff';
  ctx.save();

  await DrawImage({
    ctx,
    id: props.mascot
    });

  DrawText(
    {
      ctx,
      tCtx,
      text: 'Top Sign'.toUpperCase(),
      fontSize: 1000, //designed size
      width: 0.85 * canva.width, //designed width = 3600
      offsetTop: 100, //designed size
      lineWidth: 6,
      fillStyle: '#226',
      distortion: 500, //designed size,
    }
  );
  DrawText(
    {
      ctx,
      tCtx,
      text: 'Bottom Sign'.toUpperCase(),
      fontSize: 1200, //designed size
      width: 0.85 * canva.width, //designed width = 3600
      offsetTop: 2200, //designed size
      lineWidth: 6,
      fillStyle: '#226',
      distortion: -500, //designed size
    }
  );

  ctx.restore()
}

export function usePersistentState(init) {
  const [props, setProps] = useState({
    ...JSON.parse(localStorage.getItem('draw-app')),  ...init
  }
  );

  useEffect(() => {
    localStorage.setItem('draw-app', JSON.stringify(props))
  });

  return [props, setProps]
}

export function usePersistentCanvas(initialProps) {
  const [props, setProps] = usePersistentState(initialProps);
  const canvasRef = useRef(null);
  const textCanvasREf = useRef(null);
  useEffect(() => {
    const { canva } = props;
    const canvas = canvasRef.current;
    const textCanvas = textCanvasREf.current;
    const ctx = canvas.getContext('2d');
    const tCtx = textCanvas.getContext('2d');
    canvas.setAttribute('width', canva.width);
    canvas.setAttribute('height', canva.height);
    textCanvas.setAttribute('width', canva.width);
    textCanvas.setAttribute('height', canva.height);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    console.log('props =', props );
    draw(ctx, tCtx, props);
    // locations.forEach(location => draw(ctx, tCtx, location))
  })

  return [props, setProps, canvasRef, textCanvasREf]
}
