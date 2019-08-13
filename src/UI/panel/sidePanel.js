import React, {Fragment} from 'react';
import classNames from 'classnames';
import ColorPicker from 'material-ui-color-picker';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {fonts} from './../../assets'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
    margin: theme.spacing(3, 2),
  },
  container: {
    display: 'flex',
    flexWrap: 'nowrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '15rem',
    fontFamily: 'AtomicAge'
  },
  colorPicker: {
    backgroundColor: 'red'
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

export default function ({eventHandler, props}) {
  const { texts } = props;
  const classes = useStyles();

  const handleChange = name => event => {
    eventHandler({ [name]: event.target.value });
  };

  const handleChangeTextsProp = (idx, name) => event => {
    const newTexts = texts;
    newTexts[idx] =  {
      ...texts[idx],
      text: (event.target.value).toUpperCase(),
    };
    eventHandler({
      texts: newTexts
    });
  };

  const handleChangeTextsColorsProp = (idx, name) => color => {
    const newTexts = texts;
    newTexts[idx] =  {
      ...texts[idx],
      [name]: color,
    };
    eventHandler({
      texts: newTexts
    });
  };


  return <Fragment>
    <h3 style={{fontFamily: props.fontFamily}} >Please select options</h3>
    <TextField
      id='standard-select-currency-native'
      select
      label='Select font'
      className={classes.textField}
      value={props.fontFamily}
      onChange={handleChange('fontFamily')}
      SelectProps={{
        native: true,
        MenuProps: {
          className: classes.menu,
        },
      }}
      helperText='Please select font'
      margin='normal'
    >
      {fonts.map(option => (
        <option key={option.value} value={option.value}  style={{fontFamily: option.value}}>
          {option.label}
        </option>
      ))}
    </TextField>


    { texts.map( (textItem, idx) => <Paper className={classes.root} key={textItem.id}>
      <TextField
        id={textItem.id}
        label={textItem.label}
        defaultValue={textItem.text}
        onChange={handleChangeTextsProp(idx, 'text')}
        className={classNames(classes.textField, classes.dense)}
      />
      <Grid container justify="center" spacing={3}>
        <Grid item xs={5}>
          <ColorPicker
            name='color'
            label={`strokeStyle`}
            value={textItem.strokeStyle}
            onChange={handleChangeTextsColorsProp(idx, 'strokeStyle')}
          />
        </Grid>
        <Grid item xs={5}>
          <ColorPicker
            name='color'
            label={`filling`}
            value={textItem.fillStyle}
            onChange={handleChangeTextsColorsProp(idx, 'fillStyle')}
          />
        </Grid>
      </Grid>
      </Paper>)
    }
  </Fragment>

}

