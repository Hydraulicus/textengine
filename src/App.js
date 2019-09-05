import React, {Fragment, useEffect, useState} from 'react';
import { loadInitialState } from './functionality'
import { MainLayout } from './UI/'
import {initialProps} from './constants/initSettings';
import './Index.module.scss'
import './App.css'

function App() {
  const [isMounted, setIsMounted] = useState(false);
  const [props, setProps] = useState(initialProps);

  const content = (isMounted )
    ? <MainLayout {...props} />
    : <span style={{fontFamily: 'Arvo-Bold'}}>Loading...</span>;

  useEffect(() => {
    // loadInitialState(props).then( p => {
    //     setProps(p)
        setIsMounted(true)
      // }
    // );
  } , []);

  // useEffect(() => {
  //   // console.log('LoadedTemplateState props', props);
  // } , [props]);

  return (<Fragment>
      {content}
    </Fragment>
  )
}

export default App
