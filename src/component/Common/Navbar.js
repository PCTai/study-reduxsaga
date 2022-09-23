import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    borderRight: '1px solid #717171',
    height:'100%'
  },
  itemLink: {
    color : "#000",
    textDecoration: 'none'
  }
}));


export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <Link className={classes.itemLink} to="/admin/dashboard">
                <ListItem button>
                    <ListItemIcon>
                    <DashboardIcon />
                    </ListItemIcon>
                <ListItemText primary="Dashboard" />
                </ListItem>
            </Link>
        
        <Link className={classes.itemLink} to="/admin/student">
            <ListItem button>
            <ListItemIcon>
                <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Student" />
            </ListItem>
        </Link>
         
        
      </List>
      
    </div>
  );
}