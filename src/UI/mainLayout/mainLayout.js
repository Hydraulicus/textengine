import React, {Fragment } from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Paper from '@material-ui/core/Paper';
import { appLauncher } from './../../functionality'
import { SidePanel, MascotsPanel, TemplatesPanel, Header } from './../'
import styles from './Index.module.scss'

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

function MainLayout({setProps, ...props}) {
  // console.log('mainLayout props.template.id=', props.template.id, '  props.redrawCanvas =', props.redrawCanvas);
  const {HQSize, canvasRef, textCanvasREf, eventHandler} = props;

  const classes = useStyles();

  return (
    <Fragment>
      <Header />
      <Grid container spacing={3} className={classes.root}>

        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <SidePanel eventHandler={eventHandler} props={props}/>
          </Paper>
        </Grid>

        <Grid item xs={5}>
          <div className={styles.canvaContainer}>
            <canvas key={props.template.id}
              id='THEMAINCANVAS'
              className={styles.canvases}
              ref={canvasRef}
            />
          </div>
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


        <Grid item xs={4}>
          <TemplatesPanel eventHandler={eventHandler}/>
          <MascotsPanel eventHandler={eventHandler}/>
        </Grid>

      </Grid>

      <canvas
        className={classNames(styles.serviceCanvas, styles.canvases)}
        ref={textCanvasREf}
      />
    </Fragment>
  )
}

export default appLauncher( MainLayout )
