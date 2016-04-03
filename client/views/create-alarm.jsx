import React from 'react';

import { RaisedButton, SelectField, TimePicker, MenuItem } from 'material-ui';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

class DayDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value : 1
    }

    this.handleChange = this.handleChange.bind(this);
  }

  renderDays() {
    var els = [];

    for(var i = 1; i < days.length; i++) {
      els.push(<MenuItem key={i} value={i} primaryText={ days[i - 1] } /> )
    }
    return els;
  }

  handleChange(evt, index, value) {
    console.log("EVENT", evt, index, value);
    this.setState({
      value : index + 1
    })
  }

  getDay() {
    return this.state.value;
  }

  render() {
    return <SelectField value={this.state.value} onChange={this.handleChange}>
      { this.renderDays() }
    </SelectField>
  }
}

class TimePickers extends React.Component {
  constructor(props) {
    super(props)
  }

  getTime() {
    return this.refs.time.getTime();
  }

  render() {
    return (
        <TimePicker
          hintText="Alarm Time"
          ref="time"
        />
    )
  }
}

export default class CreateAlarm extends React.Component {
  constructor(props) {
    super(props);

    this.onPickSong = this.onPickSong.bind(this);
  }

  onPickSong() {
    console.log("Pick Song");
    console.log("Time:", this.refs.timePickers.getTime());
  }

  render() {
    return <div>
      <DayDropdown ref="dayDropdown"/>
      <TimePickers ref="timePickers"/>
      <RaisedButton label="Choose Song" onTouchTap={this.onPickSong} />
    </div>
  }
}