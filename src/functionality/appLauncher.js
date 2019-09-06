import {useEffect} from 'react';
import _ from 'lodash'
import { applayTemplate } from './../functionality'
import { usePersistentCanvas } from './../canvas'

export default function (component) {
  let redrawCanvas = true;
  return function({setProps, ...props}) {

    // console.log(' appLauncher initialProps=', props)
    const [canvasRef, textCanvasREf] = usePersistentCanvas({...props, setProps, redrawCanvas});

    function eventHandler(e) {
      // console.log('eventHandler', e);
      setProps(_.defaultsDeep(e, props))
      if (props.template.id !== e.template.id) { redrawCanvas = false }
    }

    useEffect(() => {
      if (props.template.id !== 'builtin') {
        applayTemplate(props).then( p => {
            redrawCanvas = true;
            setProps(p)
          }
        );
      }
    } , [props.template.id]);

    return component({...props, setProps, canvasRef, textCanvasREf, eventHandler})
  }
}

