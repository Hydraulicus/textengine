import { useState, useEffect, useRef } from 'react'
import { saveAs } from 'file-saver';
import { HQSize } from './../constants/initSettings';
import draw from './drawingSequence'

export function usePersistentState(init) {
  const [props, setProps] = useState(init);

  useEffect(() => {
    // localStorage.setItem('draw-app', JSON.stringify(props))
    console.log('props changed', props)
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
    // console.log('drawing props =', props);

    await draw(ctx, tCtx, props);
    if (props.saveLQ || props.saveHQ) {
      saveCanvasToFile(`export_LQ_${Date.now()}.png`);
      setProps({
        ...props,
        saveLQ: false,
        saveHQ: false,
      });
    }
  }

  useEffect( () => {
    const canvas = canvasRef.current;
    const textCanvas = textCanvasREf.current;
    const ctx = canvas.getContext('2d');
    const tCtx = textCanvas.getContext('2d');

    const canvasResolution = props.saveHQ
       ? { ...HQSize } // set HQ resolution for render for capture the image
       : props.canva;

    canvas.setAttribute('width', canvasResolution.width);
    canvas.setAttribute('height', canvasResolution.height);
    textCanvas.setAttribute('width', canvasResolution.width);
    textCanvas.setAttribute('height', canvasResolution.height);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    drawing(ctx, tCtx, props)
  });

  return [props, setProps, canvasRef, textCanvasREf]
}
