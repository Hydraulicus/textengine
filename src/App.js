import React, {Fragment} from 'react';
import { SidePanel } from './UI/'
import { usePersistentCanvas } from './canvas'
import styles from './Index.module.scss'
import './App.css'

function App() {
  const [props, setProps, canvasRef, textCanvasREf] = usePersistentCanvas()

  function handleCanvasClick(e) {
    setProps([...props, { x: e.clientX, y: e.clientY }])
  }

  function eventHandler(e) {
    console.log('eventHandler', e);
    setProps({...props, ...e })
  }

  {/*<button onClick={handleClear}>Clear</button>*/}
  {/*<button onClick={handleUndo}>Undo</button>*/}

  return (
    <Fragment>
      <div className="controls">

      </div>
      <SidePanel eventHandler={eventHandler}/>
      <canvas
        ref={canvasRef}
        style = {{width: '720px', height: '720px'}}
      />
      <canvas
        className={styles.serviceCanvas}
        ref={textCanvasREf}
        style = {{width: '720px', height: '720px'}}
      />
    </Fragment>
  )
}

export default App
