import React  from 'react';
import Photo from './Photo';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { fetchImages } from './fechingImages/UnsplashImages'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root:{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",

    }
}));

const Home = () => {
    const classes = useStyles();
    const [photos, setPhotos] = useState();
    useEffect(() => {
          axios.get('https://api.unsplash.com/photos/random/?client_id=d685b79cfb072f6e7930cc71d6e89cd34f39d2d31260e1a44de5db64c2efd239&count=9&orientation=squarish')
            .then(({data}) => {
                setPhotos(data);
            })
            .catch(err => {
            })
    }, []);
    

    return photos ? (
        <div className={classes.root}>
            {photos.map(photo => (
            <Photo src={photo.urls.small} />            
            ))}
        </div>
    ) : <h1></h1>
   
}
export default Home;