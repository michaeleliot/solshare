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
  }
}

class Login extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.socialWrapper} style={{textAlign: "center", paddingTop: 200}}>
        <div>
          <GoogleButton />
        </div>
        <div>
          <FacebookButton />
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Login);
