import React, {Fragment, useEffect, useState} from 'react';
import {MainLayout} from './UI/'
import {initialProps} from './constants/initSettings';
import './Index.module.scss'
import './App.css'

function App() {
  const [isMounted, setIsMounted] = useState(false);
  const [props, setProps] = useState(initialProps);

  const content = (isMounted )
    ? <MainLayout {...props} setProps={setProps}/>
    : <span style={{fontFamily: 'Arvo-Bold'}}>Loading...</span>;

  useEffect(() => {
        setIsMounted(true)
  } , []);

  return (<Fragment>
      {content}
    </Fragment>
  )
}

export default App
