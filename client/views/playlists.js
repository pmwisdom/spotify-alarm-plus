import React from 'react';
import { Menu, MenuItem } from 'material-ui';

export default class Playlists extends React.Component {
  constructor(props) {
    super(props);
  }

  getPlaylists() {
    if(Meteor.user() && Meteor.user().services) {
      SpotifyAPI.setAccessToken(Meteor.user().services.spotify.accessToken);
      var spotifyId = Meteor.user().services.spotify.id;
      var currentPlaylist = Session.get('currentPlaylist');

      SpotifyAPI.getPlaylistTracks(spotifyId, currentPlaylist, function(err, res) {
        console.log("err?", err);
        console.log('res?', res);

      });
    }
  }

  render() {

  }
}