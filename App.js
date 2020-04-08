import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './src/reducers';
import AppNavigation from './src/navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { token } from './src/constants';
import { login, hasAuthorized } from './src/services/login';
import { AuthContext } from './src/contexts';
import { SplashScreen } from './src/screens';

const initialState = {};
const store = createStore(combineReducers, initialState);
const App = () => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const authToken = await AsyncStorage.getItem(token);
        await hasAuthorized({ token: authToken });
        setUserToken(authToken);
      } catch (error) {
        setUserToken(null);
      }
      setIsLoading(false);
    };
    bootstrapAsync();
  }, [userToken]);

  const signIn = async ({ loginname, password }) => {
    try {
      const authToken = await login({ loginname, password });
      await AsyncStorage.setItem(token, authToken);
      setUserToken(token, authToken);
    } catch (error) {
      setUserToken(token, null);
    }
  };

  const authContext = {
    userToken,
    signIn,
  };

  if (isLoading) {
    return <SplashScreen />;
  } else {
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
