import React, {Fragment} from 'react';
import classNames from 'classnames';
import ColorPicker from 'material-ui-color-picker';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import {fonts} from './../../assets'

const maxStringSize = 30;

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
    // width: '12rem',
    // fontFamily: 'AtomicAge'
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
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function ({eventHandler, props}) {
  const {
    texts,
  } = props;
  const classes = useStyles();

  const handleChangeTextsProp = (idx, name) => event => {
    let { value } = event.target;

    if ( name === 'text' &&  value.length > maxStringSize) return;
    if ( name === 'text' ) value = value.toUpperCase();

    const newTexts = texts;
    newTexts[idx] =  {
      ...texts[idx],
      [name]: value,
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

  const checkBox = <Checkbox
    defaultChecked
    color="default"
    value="checkedG"
    inputProps={{
      'aria-label': 'checkbox with default color',
    }}
  />;

  return <Fragment>
    <h3 style={{fontFamily: props.fontFamily}} >Please select options</h3>
    { texts.map( (textItem, idx) => <Paper className={classes.root} key={textItem.id}>
        <TextField
          id={textItem.id}
          label={`${textItem.label} ${textItem.text.length} / ${maxStringSize}`}
          defaultValue={textItem.text}
          onChange={handleChangeTextsProp(idx, 'text')}
          className={classNames(classes.textField, classes.dense)}
          variant="outlined"
          InputProps={{
            startAdornment: <InputAdornment position="start">{checkBox}</InputAdornment>,
          }}
        />
        <TextField
          id='standard-select-currency-native'
          select
          variant="outlined"

          label='Select font'
          className={classNames(classes.margin, classes.textField)}
          value={textItem.fontFamily}
          onChange={handleChangeTextsProp(idx, 'fontFamily')}
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
            <option key={option.value} value={option.value} style={{fontFamily: option.value}}>
              {option.label}
            </option>
          ))}
        </TextField>

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
      </Paper>
    )
    }
  </Fragment>

}

