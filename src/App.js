import React, {Fragment} from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import { SidePanel, MascotsPanel } from './UI/'
import { usePersistentCanvas } from './canvas'
import {HQSize, initialProps} from './constants/initSettings';
import styles from './Index.module.scss'
import './App.css'
// import './fonts.scss'

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
          <MascotsPanel eventHandler={eventHandler}/>
        </Grid>

        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <SidePanel eventHandler={eventHandler} props={props}/>
          </Paper>
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
