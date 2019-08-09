import { useState, useEffect, useRef } from 'react'
import DrawText from './drawText'
import DrawImage from './drawImage'

export function draw(ctx, tCtx, props) {
  ctx.fillStyle = '#fff';
  ctx.save();
  // ctx.scale(SCALE, SCALE)
  // ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET)
  // ctx.fill(HOOK_PATH)

  DrawImage({
    ctx,
    id: props.mascot
    });

  DrawText(
    {
      ctx,
      tCtx,
      text: 'Top Sign'.toUpperCase(),
      fontSize: 1000,
      width: 3200,
      offsetTop: 200,
      lineWidth: 6,
      fillStyle: '#226',
      distortion: 500,
    }
  );
  DrawText(
    {
      ctx,
      tCtx,
      text: 'Bottom Sign'.toUpperCase(),
      fontSize: 1200,
      width: 3200,
      offsetTop: 1800,
      lineWidth: 6,
      fillStyle: '#226',
      distortion: -500,
    }
  );

  ctx.restore()
}

export function usePersistentState(init) {
  const [props, setProps] = useState(
    JSON.parse(localStorage.getItem('draw-app')) || init
  );

  useEffect(() => {
    localStorage.setItem('draw-app', JSON.stringify(props))
  });

  return [props, setProps]
}

export function usePersistentCanvas() {
  const [props, setProps] = usePersistentState([]);
  const canvasRef = useRef(null);
  const textCanvasREf = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const textCanvas = textCanvasREf.current;
    const ctx = canvas.getContext('2d');
    const tCtx = textCanvas.getContext('2d');
    canvas.setAttribute('width', 3600);
    canvas.setAttribute('height', 3600);
    textCanvas.setAttribute('width', 3600);
    textCanvas.setAttribute('height', 3600);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    console.log('props =', props);
    draw(ctx, tCtx, props);
    // locations.forEach(location => draw(ctx, tCtx, location))
  })

  return [props, setProps, canvasRef, textCanvasREf]
}
