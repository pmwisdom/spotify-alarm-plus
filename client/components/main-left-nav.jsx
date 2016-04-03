import React from 'react';
import MenuItem from 'material-ui/lib/menus/menu-item';
import LeftNav from 'material-ui/lib/left-nav';
import { browserHistory } from 'react-router'


const routes = [
  {
    target : "home",
    name : "Home"
  },
  {
    target : "alarms",
    name : "Alarms"
  }
]

export default class MainLeftNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open : false
    }

    this.onNavRequestChange = this.onNavRequestChange.bind(this);
  }

  toggleMenu() {
    this.setState({
      open : !this.state.open
    })
  }

  onNavRequestChange(reason) {
    console.log("REASON", reason);

    this.toggleMenu();
  }

  onMenuNav(target) {
    console.log("Target", target);
    browserHistory.push(target);
    this.toggleMenu();
  }

  renderMenuItems() {
    return routes.map( (route) => {
      return <MenuItem key={route.target} onTouchTap={this.onMenuNav.bind(this, route.target)}> { route.name } </MenuItem>
    })
  }

  render() {
    return (
      <LeftNav
        open={this.state.open}
        docked={false}
        onRequestChange={this.onNavRequestChange}
      >
        {this.renderMenuItems()}
      </LeftNav>
    )
  }
}