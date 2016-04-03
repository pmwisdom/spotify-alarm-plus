import React from 'react';

import MainAppBar from '/client/components/main-app-bar';
import MainLeftNav from '/client/components/main-left-nav';


const appStyle = {
  backgroundColor : "white",
  position : "absolute",
  top : 0,
  left : 0,
  right : 0,
  bottom : 0
};



export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.onClickMenuToggle = this.onClickMenuToggle.bind(this);
  }

  onClickMenuToggle() {
    this.refs.leftNav.toggleMenu();
  }

  render() {
    return <div style={ appStyle }>
      <MainAppBar onClickMenuToggle={this.onClickMenuToggle} />
      <MainLeftNav ref="leftNav" />
      { this.props.children }
    </div>
  }
}