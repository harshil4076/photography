import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import MoreIcon from '@material-ui/icons/MoreVert';
import Home from './Home';
import Aboutme from './Aboutme'
import { Switch, Route, Link } from 'react-router-dom';
import Contact from './Contact';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor: 'white',
    display: 'flex'
  },
  logo: {
    color: "#555",
    fontWeight: "lighter",
    fontFamily: "Open Sans, sans-serif",
    flexGrow: 1,
    textTransform: "uppercase",
    letterSpacing: ".2rem"
  },
  name:{
    fontWeight: 600,
    color:"black"
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  MenuItem:{
    color: "#555555"
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  }
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget)
  }
 
  

  return (
    <div className={classes.root}>
       <CssBaseline />
      <AppBar
        position="fixed"
        className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
        <Typography variant="h6" noWrap className={classes.logo}>
           <span className={classes.name}>HK </span>Photography
          </Typography>
          <div className={classes.sectionDesktop}>
            <Link to="/">
            <Button>Home</Button>
            </Link>
          <Button onClick={handleMenuOpen}>Gallery</Button>
                <Menu
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    open={isMenuOpen}
                    onClose={handleMenuClose}
                    className={classes.MenuItem}
                  >
                      <MenuItem onClick={handleMenuClose}>Meternity</MenuItem>
                      <MenuItem onClick={handleMenuClose}>Marriage</MenuItem>
                      <MenuItem onClick={handleMenuClose}>Ring Ceremony</MenuItem>
                      <MenuItem onClick={handleMenuClose}>Pets</MenuItem>
                      <MenuItem onClick={handleMenuClose}>Destination</MenuItem>
                      <MenuItem onClick={handleMenuClose}>Adult Shoots</MenuItem>
                      <MenuItem onClick={handleMenuClose}>Babies</MenuItem>
                </Menu>
                <Link to ="/contact">
          <Button>Contact</Button>
                </Link>
          <Link to="/aboutme">
          <Button>About Me</Button>
          </Link>
          </div>
          <div className={classes.sectionMobile}>
          <IconButton
              aria-label="show more"
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
            <MoreIcon color="primary" />
          </IconButton>  
          <Menu
                    anchorEl={mobileMoreAnchorEl}
                    // anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    keepMounted
                    // transformOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    open={isMobileMenuOpen}
                    onClose={handleMobileMenuClose}
                    className={classes.MenuItem}
                  >
                      <MenuItem onClick={handleMobileMenuClose}>
                        <Link to="/">
                          <Button>Home</Button>
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleMobileMenuClose}>
                      <Link to ="/contact">
                      <Button >Contact</Button>
                            </Link>
                      </MenuItem>
                      <MenuItem onClick={handleMobileMenuClose}>
                          <Button onClick={handleMenuOpen}>Gallery</Button>
                      </MenuItem>
                      <MenuItem onClick={handleMobileMenuClose}>
                        <Link to="/aboutme">
                          <Button>About Me</Button>
                        </Link>
                      </MenuItem>
                </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
      <Switch>
      <Route exact path = "/">
        <Home />
        </Route>
        <Route exact path = "/aboutme">
          <Aboutme />
        </Route>
        <Route exact path= "/contact" >
          <Contact />
        </Route>
    </Switch>
      </main>
      
    </div>
    
  );
}