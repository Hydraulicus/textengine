import React, {Fragment } from 'react';
import _ from 'lodash'
import { SidePanel, MascotsPanel, TemplatesPanel, Header } from './../'
import { usePersistentCanvas } from './../../canvas'
import { MainLayout } from './../UI/'


export default function ({HQSize, ...theRestInitProps}) {
  const [props, setProps, canvasRef, textCanvasREf] = usePersistentCanvas({...theRestInitProps});

  function eventHandler(e) {
    // console.log('eventHandler', e);
    // setProps({...props, ...e })
    setProps(_.defaultsDeep(e, props))
  }

  return (
    <Fragment>
      <MainLayout {...props} />
    </Fragment>
  )
}

