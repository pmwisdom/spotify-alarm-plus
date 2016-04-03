import React from 'react';
import AppBar from 'material-ui/lib/app-bar';

export default class MainAppBar extends React.Component {
  constructor(props) {
    super(props);

    this.onClickMenuToggle = this.onClickMenuToggle.bind(this)
  }

  onClickMenuToggle() {
    console.log("Clciked left button");
    this.props.onClickMenuToggle();
  }

  render() {
    return (
      <AppBar
        title="Spotify Alarm Plus"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.onClickMenuToggle}
      />
    )
  }
}