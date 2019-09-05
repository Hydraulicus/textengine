import _ from 'lodash'
import { usePersistentCanvas } from './../canvas'

export default function (component) {

  return function(initialProps) {

    const [props, setProps, canvasRef, textCanvasREf] = usePersistentCanvas({...initialProps});

    function eventHandler(e) {
      // console.log('eventHandler', e);
      setProps(_.defaultsDeep(e, props))
    }

    console.log('appLauncher return function initialProps=', initialProps)

    return component({...initialProps, ...props, setProps, canvasRef, textCanvasREf, eventHandler})

  }

}

