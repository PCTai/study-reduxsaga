import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from "../Common/Header";
import Main from "../Common/Main";
import Navbar from '../Common/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '300px 1fr 1fr',
    gridTemplateRows: 'auto 1fr',
    gridTemplateAreas: `"h1 h1 h1" "h2 h3 h3"`
    

  },
  header :{
    gridArea: 'h1',
  },
  navbar :{
    gridArea: 'h2',
  },
  main: {
    gridArea: 'h3',
  }


}));

export default function Admin() {
  const classes = useStyles();

  
  return (
    <div className={classes.root}>
        <div className={classes.header}>
            <Header/>
        </div>
        <div className={classes.navbar}>
            <Navbar/>
        </div>
        <div className={classes.main}>
            <Main/>
        </div>

        
      
    </div>
  );
}