import 'react-native-gesture-handler';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './src/reducers';
import AppNavigation from './src/navigation';
import { AuthContext } from './src/contexts';
import { SplashScreen } from './src/screens';
import { useAuth } from './src/hooks';

const initialState = {};
const store = createStore(combineReducers, initialState);
const App = () => {
  const auth = useAuth();
  if (auth === null) {
    return <SplashScreen />;
  } else {
    const [userToken, signIn] = auth;
    const authContext = {
      userToken,
      signIn
    };
    return (
      <Provider store={store}>
        <AuthContext.Provider value={authContext}>
          <AppNavigation />
        </AuthContext.Provider>
      </Provider>
    );
  }
}

export default App;
