import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Sources from "../../components/Sources/Sources";
import LinearProgress from '@material-ui/core/LinearProgress';

import axios from "axios";

const useStyles = (theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  button: {
    width: "80%",
    float: "right",
  },
  textfield: {
    width: "100%",
  },
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: [],
      url: "",
      open: false,
      fetch: false,
    };
  }
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ fetch: false });
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleClick = async (event) => {
    this.setState({
      fetch: true
    })
    let body = { url: this.state.url };
    let res = await axios.post("/api/scrape/", body);
    this.setState({
      sources: res.data,
      fetch: false
    });
  };

  handleSave = async (numSelected, selected ) => {
    let sourcesToSave = [];
    let { sources } = this.state;
    for(let index of selected) {
      sourcesToSave.push(sources[index]);
    }

    try {
      await axios.post('/api/sources/', sourcesToSave);
      this.setState({
        open: true
      });
    } catch (error) {
      console.log('Failed');
    }
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      open: false
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className="homepage">
          {this.state.fetch ? <LinearProgress color="secondary" />: ""}

        <Button to="/sources">
          <Link to="/sources"></Link>
        </Button>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            className={classes.textfield}
            id="url"
            label="URL"
            labelWidth={60}
            name="url"
            onChange={this.handleChange}
          />
          <Button
            className={classes.root.button}
            variant="contained"
            color="primary"
            onClick={this.handleClick}
            disabled={this.state.fetch}
          >
            SCRAPE
          </Button>
        </form>
        <Sources sources={this.state.sources} handleSave={this.handleSave}/>
        <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleClose}
        message="Source Saved"
        action={
          <React.Fragment>
            <Button color="primary" size="small" onClick={this.handleClose}>
              Saved
            </Button>
            <IconButton size="small" aria-label="close" color="inherit" onClick={this.handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      </div>
    );
  }
}

export default withStyles(useStyles)(HomePage);
