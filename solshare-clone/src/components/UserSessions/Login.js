import React, { Component } from 'react';
import GoogleButton from './GoogleButton'
import FacebookButton from './FacebookButton'
import { withStyles } from '@material-ui/core/styles';


const styles = {
  socialWrapper: {
    "text-align": "center",
  },
  social: {
    "display":"inline-block",
    "width": 150,
    "height": 50,
  }
}

class Login extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.socialWrapper} style={{textAlign: "center", paddingTop: 200}}>
        <div className={classes.social}>
          <GoogleButton />
        </div>
        <div className={classes.social}>
          <FacebookButton />
        </div>
        <div id="status">"Here is the status"</div>
      </div>
    );
  }
}
export default withStyles(styles)(Login);
