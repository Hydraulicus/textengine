import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {fonts} from './../../assets'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '15rem',
    fontFamily: 'AtomicAge'
  },

  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

export default function ({eventHandler, props}) {
  const classes = useStyles();

  // const [values, setValues] = React.useState({
  //   name: 'Cat in the Hat',
  //   age: '',
  //   multiline: 'Controlled',
  //   currency: 'EUR',
  // });

  const handleChange = name => event => {
    eventHandler({ [name]: event.target.value });
  };


  return <Fragment>

    <h3 style={{fontFamily: props.fontFamily}} >Please select options</h3>

    <TextField
      id="standard-select-currency-native"
      select
      label="Select font"
      className={classes.textField}
      value={props.fontFamily}
      onChange={handleChange('fontFamily')}
      SelectProps={{
        native: true,
        MenuProps: {
          className: classes.menu,
        },
      }}
      helperText="Please select font"
      margin="normal"
    >
      {fonts.map(option => (
        <option key={option.value} value={option.value}  style={{fontFamily: option.value}}>
          {option.label}
        </option>
      ))}
    </TextField>
  </Fragment>

}

