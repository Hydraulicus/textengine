import {useState, useEffect} from 'react';

import _ from 'lodash'
import { applayTemplate } from './../functionality'
import { usePersistentCanvas } from './../canvas'

export default function (component) {
  return function({setProps, ...props}) {

    // const [props, setProps] = useState(initialProps);

    console.log(' appLauncher initialProps=', props)

    // const [props, setProps, canvasRef, textCanvasREf] = usePersistentCanvas({...initialProps});
    const [canvasRef, textCanvasREf] = usePersistentCanvas({...props, setProps});

    const {redrawCanvas} = props;

    function eventHandler(e) {
      console.log('eventHandler', e);
      console.log(' newProps: ', _.defaultsDeep(e, props));
      setProps(_.defaultsDeep(e, props))
    }

    // if (props.template.id !== 'builtin') {

    // console.log('props.template.id, initialProps.template.id', props.template.id, initialProps.template.id)

    useEffect(() => {
      console.log('props.template.id changed', props.template.id);

      // if (props.template.id !== initialProps.template.id) {
      if (props.template.id !== 'builtin') {
        // debugger;
        applayTemplate(props).then( p => {

            console.log('applayTemplate p=', p);

            setProps(p)
          }
        );

      }

    } , [props.template.id]);


    // console.log('appLauncher initialProps=', initialProps)
    // console.log('appLauncher neew props=', props)

    // return component({...initialProps, ...props, setProps, canvasRef, textCanvasREf, eventHandler, redrawCanvas: false})
    return component({...props, setProps, canvasRef, textCanvasREf, eventHandler, redrawCanvas: false})

  }

}

