import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: 'none',
    color: "white",
    fontSize: "35px"
  },
  subtitle: {
    flexGrow: 1,
    textDecoration: 'none',
    color: "white",
    fontSize: "25px",
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} component={RouterLink} to="/">
            Scrapp
          </Typography>
          <Typography variant="h6" className={classes.subtitle} component={RouterLink} to="/">
            Scrape the web
          </Typography>
          <Button color="inherit" component={RouterLink} to="/sources">Sources</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}