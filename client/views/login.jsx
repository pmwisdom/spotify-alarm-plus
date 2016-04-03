import React from 'react';
import { browserHistory } from 'react-router';
import { TextField, RaisedButton } from 'material-ui';

const containerStyle = {
  display : "flex",
  flexDirection : "column",
  alignItems : "center",
  alignContent : "center"
};
var options = {
  showDialog: true, // Whether or not to force the user to approve the app again if they’ve already done so.
  requestPermissions: ['user-read-email'] // Spotify access scopes.
};

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    Meteor.loginWithSpotify(options, function(accessToken) {
      if(Meteor.user()) {
        browserHistory.push('/home')
      }
    });
  }

  render() {
    return (
      <div style={containerStyle} >
        <h1> Login With Spotify </h1>
        <div style={{ flexGrow : "1" }}> </div>
        <RaisedButton label="login" onTouchTap={this.onLogin} />
      </div>
    )
  }
}