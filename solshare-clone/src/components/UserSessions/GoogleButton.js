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
    onSignIn(googleUser) {
      console.log("Signing In!")
      var profile = googleUser.getBasicProfile();
      document.getElementById('status').innerHTML = 'Thanks for logging in using Google, ' + profile.getName() + '!';
    }

    render() {
      return (
          <div className="g-signin2" data-onsuccess="onSignIn"></div>
      );
    }
}
export default GoogleButton;
