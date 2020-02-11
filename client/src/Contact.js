import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles(theme =>({
    root: {
        paddingTop: "100px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        },
    textfield: {
        margin: "2vh",
      
    }
}))

const Contact = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <TextField
            className={classes.textfield}
            id="standard-textarea"
            label="First Name"
            placeholder="First Name"
            multiline />

            <TextField
            className={classes.textfield}
            id="standard-textarea"
            label="Last Name"
            placeholder="Last Name"
            multiline />
            <TextField
          id="standard-full-width"
          label="Email"
          style={{ margin: 8 }}
          placeholder="E-mail"
          
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        </div>
        
    )
}

export default Contact;