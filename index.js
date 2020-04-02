/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { setUpAPIEndPoint } from './apiendpoint.config';
if (__DEV__) {
  import('./reactotron.config.js').then(() => {
    console.log('Reactotron Configured');
  });
}
setUpAPIEndPoint();
AppRegistry.registerComponent(appName, () => App);
