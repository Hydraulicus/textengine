import {useEffect, useMemo} from 'react';
import _ from 'lodash'
import { applayTemplate } from './../functionality'
import { usePersistentCanvas } from './../canvas'

export default function (component) {
  let redrawCanvas = true;
  return function({setProps, ...props}) {

    // console.log(' appLauncher initialProps=', props)
    const [canvasRef, textCanvasREf] = usePersistentCanvas({...props, setProps, redrawCanvas});

    const memoFunction = () => {
      // console.log(props, "memoFunction called");
      // Do something that will take a lot of processing ...

      if (props.template.id !== 'builtin') {
        applayTemplate(props).then( p => {
            redrawCanvas = true;
            setProps(p)
          }
        );
      }

    };

    useMemo(memoFunction, [props.template.id]);

    function eventHandler(e) {
      // console.log('eventHandler', e);
      setProps(_.defaultsDeep(e, props))
      if (props.template.id !== e.template.id) { redrawCanvas = false }
    }

    return component({...props, setProps, canvasRef, textCanvasREf, eventHandler})
  }
}

