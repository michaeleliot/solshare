// src/components/Feed.js
import React, { Component } from 'react';
class Login extends Component {

    facebookStatusChangeCallback(response) {
      if (response.status === 'connected') {
        window.FB.api('/me', function(response) {
          document.getElementById('status').innerHTML = 'Thanks for logging in using Facebook, ' + response.name + '!';
        });
        return true;
      } else {
        document.getElementById('status').innerHTML = 'Please log into this app.';
        return false;
      }
    }
    googleStatusChangeCallback(googleUser) {
      var profile = googleUser.getBasicProfile();
      document.getElementById('status').innerHTML = 'Thanks for logging in using Google, ' + profile.getName() + '!';
    }
    onSignIn(googleUser) {
      console.log('Logged in as: ' + googleUser.getBasicProfile().getName())
    }
    componentDidMount() {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId      : '202029853795089',
          cookie     : true,
          xfbml      : true,
          version    : 'v3.0'
        });
        window.FB.Event.subscribe('auth.statusChange', (response) => {
          this.facebookStatusChangeCallback(response);
        })
        window.FB.AppEvents.logPageView();
      }.bind(this);


      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    }

    render() {
      return (
        <head>
          <script src="https://apis.google.com/js/api:client.js"></script>
        </head>
        <body>
          <div className="socialwrapper" style={{textAlign: "center", paddingTop: 200}}>
            <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
            <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
            <div id="status">"Here is the status lul"</div>
          </div>
        </body>
      );
    }
}


export default Login;
