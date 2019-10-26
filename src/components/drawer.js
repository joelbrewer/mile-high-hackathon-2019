import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import HomeIcon from '@material-ui/icons/Home';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  listItem: {
    textDecoration: 'none',
    color: "gray"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Home', 'Mental Health', 'Healthcare', 'Shelter', 'Food'].map((text) => (
          <Link className={classes.listItem} to={"/" + text.toLowerCase()}>
            <ListItem button key={text}>
              {/* <ListItemIcon>
                {(text === "Housing" ? <HomeWorkIcon /> :
                    (text === "Food" ? <FastfoodIcon /> :
                    (text === "Healthcare" ? <LocalHospitalIcon /> : <FavoriteIcon />))) } 
              </ListItemIcon> */}
              <ListItemIcon>
                {(text === "Home" ? <HomeIcon /> :
                    (text === "Mental Health" ? <FavoriteIcon /> :
                    (text === "Healthcare" ? <LocalHospitalIcon /> : 
                    (text === "Shelter" ? <HomeWorkIcon /> : <FastfoodIcon />)))) } 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer('left', true)} edge="start" className="" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
