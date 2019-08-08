import React, {Fragment} from 'react';
// import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';

import { usePersistentCanvas } from './canvas'
import styles from './Index.module.scss'
import './App.css'

function App() {
  const [locations, setLocations, canvasRef, textCanvasREf] = usePersistentCanvas()

  function handleCanvasClick(e) {
    setLocations([...locations, { x: e.clientX, y: e.clientY }])
  }

  function handleClear() {
    setLocations([])
  }

  function handleUndo() {
    setLocations(locations.slice(0, -1))
  }
  return (
    <Fragment>
      <div className="controls">
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleUndo}>Undo</button>
      </div>
      <img src={logo} id='LOGO' alt="Logo" style = {{width: '20px', height: '20px'}}/>
      <canvas
        ref={canvasRef}
        style = {{width: '720px', height: '720px'}}
        onClick={handleCanvasClick}
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
