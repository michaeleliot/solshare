import React, { Component } from 'react';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
    SignInUser
 } from '../../redux/actions/actions'

const styles = {
  google: {
    "height": 50,
  }
}

const mapStateToProps = state => {
    return {
    }
}

class GoogleButton extends Component{
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        (function() {
            var e = document.createElement("script");
            e.type = "text/javascript";
            e.async = true;
            e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        })();
    }

    //Triggering login for google
    googleLogin = () => {
        let response = null;
        window.gapi.auth.signIn({
            callback: function(authResponse) {
                this.googleSignInCallback( authResponse )
            }.bind( this ),
            clientid: "142555979275-fbik5ohmqm7jvqhljucshh5d6tkksup5.apps.googleusercontent.com", //Google client Id
            cookiepolicy: "single_host_origin",
            requestvisibleactions: "http://schema.org/AddAction",
            scope: "https://www.googleapis.com/auth/plus.login email"
        });
    }

    googleSignInCallback = (e) => {
        if (e["status"]["signed_in"]) {
            window.gapi.client.load("plus", "v1", function() {
                if (e["access_token"]) {
                    this.getUserGoogleProfile( e["access_token"] )
                } else if (e["error"]) {
                    console.log('Import error', 'Error occured while importing data')
                }
            }.bind(this));
        } else {
            console.log('Oops... Error occured while importing data')
        }
    }

    getUserGoogleProfile = accesstoken => {
        var e = window.gapi.client.plus.people.get({
            userId: "me"
        });
        e.execute(function(e) {
            if (e.error) {
                console.log(e.message);
                console.log('Import error - Error occured while importing data')
                return

            } else if (e.id) {
                //Profile data
                let postData = {
                    name: e.displayName,
                    email: e.emails[0].value,
                    token: accesstoken,
                }
                this.props.SignInUser(postData)
            }
        }.bind(this));
    }

    render(){
        const { classes } = this.props
        return(
            <img src="googleButton.jpg" className={classes.google} title="google login" alt="google" onClick={ () => this.googleLogin() }/>
        )
    }
}
export default compose(withStyles(styles), connect(mapStateToProps, { SignInUser }))(GoogleButton);
