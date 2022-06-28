
import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '../../icons/Search';
import Logo from '../../img/Logo_hor.png'
import MiniLogo from '../../img/II.png'
import { useState ,useLayoutEffect} from 'react';
import './MainNavbar.scss'
import { Grid, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bar:{
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: "#d81204"
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '15ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const MainNavbar = (props) => {
  const {
    handleSearch
  } = props

  const classes = useStyles();

  const [width] = useWindowSize();

  function useWindowSize() {
      const [size, setSize] = useState([0, 0]);
      useLayoutEffect(() => {
          function updateSize() {
          setSize([window.innerWidth, window.innerHeight]);
          }
          window.addEventListener('resize', updateSize);
          updateSize();
          return () => window.removeEventListener('resize', updateSize);
      }, []);
      return size;
  }

  return (
      <AppBar id='navbar-main-container' position="static">
        <Toolbar className={classes.bar}>
            <Link to='/'>
              <img alt="Age of empires logo" height="40px" width="auto" style={{marginRight: '8px'}} src={width>600 ? Logo:MiniLogo}/>
            </Link>
            <Grid className="mainnavbar-grid-search">
            { handleSearch && 
            <>
              <Grid id="grid-icon">
                <SearchIcon />
              </Grid>
              <InputBase
                placeholder="Search by name…"
                variant='standard'
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                id='navbar-search-input'
                onChange={e=>handleSearch(e.target.value)}
              />
            </>
            }
            </Grid>
        </Toolbar>
      </AppBar>
  );
}

export default MainNavbar;