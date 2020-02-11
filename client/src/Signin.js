import React , { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function Signin(){
   
    const classes = useStyles();
        return(
            <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Username" />
            <TextField id="standard-basic" label="Password" />
            <Fab variant="extended" href="#projects" >
                SEE PROJECTS 
                </Fab>
          </form>
        )
}

export default Signin;