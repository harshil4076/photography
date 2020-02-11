import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
    root:{
        paddingTop: "50px",
        height: "100vh",
       diaplay: "flex",
       flexDirection: "column",
       alignItems: "center",
    },
    image:{
        width: theme.spacing(40),
        height: theme.spacing(40),
    
    },
    paragraph: {
        maxWidth: 800
    }
}))

const Aboutme = () => {
    const classes = useStyles();
    const [profile, setProfile] = useState();
  
    return (
        <div className={classes.root}>
            <div>
                <Avatar alt="photographer" className={classes.image} src="https://images.unsplash.com/photo-1473433657392-e7e31b785bc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </div>  
            <div>
               <List>
                   <ListItem button>
                       <ListItemText primary="Hardik Patel" />
                   </ListItem>
               </List>
            </div>
            <Typography varient="body2" className={classes.paragraph}>
            He is a six-time Grand Prize winner of the Wildlife in Focus and Valley Land Fund Photography competitions. From 2008 thru 2017 he won 1st Grand Prize four times, 2nd Grand Prize once and also has a 3rd Grand Prize finish.  He won top honors in the 2009 National Wildlife Federation Photography Contest and in the 2012 Rocky Mountain Outdoor Writers and Photographers Photography competition. In 2016, one of his images was selected as a “Best of Show” by the North American Nature Photography Association (NANPA) in their Annual Showcase competition.  His images have been in the Top 3 awards in the NANPA Showcase for the last four years in a row.  In 2019 his image of a Three-toed Sloth w/ baby won the prestigious Nature’s Best Windland Smith Rice International Awards Wildlife Category.  With over 25,000 entries from photographers in 63 different countries the Nature’s Best competition is one of the premier nature photography competitions in the world.
            </Typography>
        </div>
    )
}

 export default Aboutme;