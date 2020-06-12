import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField required id="standard-required" label="Data Value" defaultValue="Field" />
        <TextField disabled id="standard-disabled" label="Data Value" defaultValue="Field" />
      
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
          <TextField
          required
          id="filled-required"
          label="Data Value"
          defaultValue="Field"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Data Value"
          defaultValue="Field"
          variant="outlined"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="outlined"
        />

       
      </div>
    </form>
  );
}