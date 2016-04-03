import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { renderRoutes } from '/client/routes';

injectTapEventPlugin();

Meteor.startup( () => {
  console.log("Starting up meteor....", document.getElementById('app'));
  render(renderRoutes(), document.getElementById('app'));
})