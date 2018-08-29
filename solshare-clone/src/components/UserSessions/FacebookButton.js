// src/components/Feed.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    SignInUser
 } from '../../redux/actions/actions'

const mapStateToProps = state => {
    return {
    }
}
class FacebookButton extends Component {

    facebookStatusChangeCallback(response) {
      console.log(response)
      if (response.status === 'connected') {
        window.FB.api('/me', function(res) {
          console.log(res)
          let postData = {
              name: "",
              email: "",
              token: "",
          }
          this.props.SignInUser(postData)
        });
        return true;
      } else {
        return false;
      }
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
         js = d.createElement(s); js.id = id; js.async=true;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));


    }

    render() {
      return (
          <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
      );
    }
}


export default connect(mapStateToProps, { SignInUser })(FacebookButton);
