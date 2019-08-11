import React, {Fragment} from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Paper from '@material-ui/core/Paper';


import { SidePanel } from './UI/'
import { usePersistentCanvas } from './canvas'
import styles from './Index.module.scss'
import './App.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    margin: 'auto',

    color: theme.palette.text.secondary,
  },
}));

const HQSize = {
  canva: {
    width: 3600,
    height: 3600
  }
};

const LQSize = {
  canva: {
    width: 720,
    height: 720
  }
};


const initialProps = {
  saveHQ: false,
  saveLQ: false,
  ...LQSize,
};

function App() {
  const [props, setProps, canvasRef, textCanvasREf] = usePersistentCanvas({...initialProps});

  function eventHandler(e) {
    // console.log('eventHandler', e);
    setProps({...props, ...e })
  }

  const classes = useStyles();

  return (
    <Fragment>
      <Grid container spacing={3} className={classes.root}>

        <Grid item xs={12}>
          <SidePanel eventHandler={eventHandler}/>
        </Grid>

        <Grid item xs={5}>
          <Paper className={classes.paper}>Options</Paper>
        </Grid>
        <Grid item xs={7}>
          <div className={styles.canvaContainer}>
            <canvas
              id='THEMAINCANVAS'
              className={styles.canvases}
              ref={canvasRef}
            />
          </div>
        </Grid>


          <Grid container justify = "center">
          <ButtonGroup variant="contained" aria-label="small contained button group">
            <Button
              onClick = { () => { setProps({...props, saveLQ: true }) }}
            >Save as low-quality PNG (72 DPI)</Button>
            <Button
              onClick = { () => {setProps({...props, saveHQ: true, ...HQSize }) }}
            >Save as high-quality PNG (300 DPI)</Button>
          </ButtonGroup>
        </Grid>

      </Grid>

        <canvas
          className={classNames(styles.serviceCanvas, styles.canvases)}
          ref={textCanvasREf}
        />
    </Fragment>
  )
}

export default App
