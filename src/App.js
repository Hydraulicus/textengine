import React, {Fragment, useEffect, useState} from 'react';
import { MainLayout } from './UI/'
import {HQSize, initialProps} from './constants/initSettings';
import './Index.module.scss'
import './App.css'

function App() {
  const [isMounted, setIsMounted] = useState(false);

  const content = isMounted
      ? <MainLayout
        HQSize={HQSize}
        {...initialProps}
      />
    : <span style={{fontFamily: 'Arvo'}}>Loading...</span>;

  useEffect(() => {
    console.log('mounted');
    setIsMounted(true)
  } , []);

  return (<Fragment>
      {content}
    </Fragment>
  )
}

export default App
