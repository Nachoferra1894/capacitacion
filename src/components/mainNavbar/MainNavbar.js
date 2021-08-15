
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

const useStyles = makeStyles((theme) => ({
  bar:{
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: "#d81204"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
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
    <div className="mainnavbar-root">
      <AppBar position="static">
        <Toolbar className={classes.bar}>
            <Link to='/'>
              <img height="40px" width="auto" style={{marginRight: '8px'}} src={width>600 ? Logo:MiniLogo}/>
            </Link>
            <div className={classes.search}>
            { handleSearch && 
            <>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search by name…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={e=>handleSearch(e.target.value)}
              />
            </>
            }
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default MainNavbar;