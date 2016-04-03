import React from 'react';
import { RaisedButton } from 'material-ui';
import { browserHistory } from 'react-router';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.onCreateAlarm = this.onCreateAlarm.bind(this);
  }

  onCreateAlarm() {
    browserHistory.push('/create-alarm');
  }

  render() {
    return (
      <div>
        <h1> Home </h1>
        <RaisedButton label="create-alarm" onTouchTap={this.onCreateAlarm}/>
      </div>
    )
  }
}