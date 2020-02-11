import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root:{
    margin:"2px"        
    }
}));
const Photo = ({src, alt}) => {
    const classes = useStyles(); 
    return (
            <img className = {classes.root} src={src} alt={alt}/>
    )
}

export default Photo;