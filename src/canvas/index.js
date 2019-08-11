import { useState, useEffect, useRef } from 'react'
import { saveAs } from 'file-saver';
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

  await DrawText(
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
  await DrawText(
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

  return new Promise(resolve => {
    ctx.restore();
    resolve('all are drown')
  });
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

  const saveCanvasToFile = (fileName) => {
    const canvas = canvasRef.current;
    canvas.toBlob(function(blob) {
      saveAs(blob, fileName);
    });
  };

  async function drawing (ctx, tCtx, props) {
    await draw(ctx, tCtx, props);
    if (props.saveLQ) {
      saveCanvasToFile(`export_LQ_${Date.now()}.png`);
      setProps({
        ...props,
        saveLQ: false,
      });
    }
    if (props.saveHQ) {
      saveCanvasToFile(`export_HQ_${Date.now()}.png`);
      setProps({
        ...props,
        saveHQ: false,
        canva: {
          width: 720,
          height: 720
        }
      });
    }
  }

  useEffect( () => {
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
    drawing(ctx, tCtx, props)
  });

  return [props, setProps, canvasRef, textCanvasREf]
}
