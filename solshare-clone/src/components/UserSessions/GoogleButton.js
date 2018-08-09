// src/components/Login.js
import React, { Component } from 'react';

class GoogleButton extends Component {

    componentDidMount() {
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
        if (window && window.gapi) {
          window.gapi.auth.signIn({
              callback: function(authResponse) {
                  this.googleSignInCallback( authResponse )
              }.bind( this ),
              clientid: '142555979275-fbik5ohmqm7jvqhljucshh5d6tkksup5.apps.googleusercontent.com',
              cookiepolicy: "single_host_origin",
              requestvisibleactions: "http://schema.org/AddAction",
              scope: "https://www.googleapis.com/auth/plus.login email"
          });
        }

    }

    googleSignInCallback = (e) => {
        console.log( e )
    }


    render() {
      return (
          <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--FGeepbF---/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/dpiytaii5nezptwibem4.png' title="google login" alt="google" onClick={ () => this.googleLogin() }/>
      );
    }
}
export default GoogleButton;
