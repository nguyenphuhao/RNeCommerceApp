/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './src/reducers';
import { Navigation } from './src/navigation';

const initialState = {};
const store = createStore(combineReducers, initialState);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;
