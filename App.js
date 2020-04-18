import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { UIManager } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import AppNavigation from './src/navigation';
import { AuthContext } from './src/contexts';
import { SplashScreen } from './src/screens';
import { useAuth } from './src/hooks';
import { Connectivity } from './src/components';

const store = configureStore();

const App = () => {
  useEffect(() => {
    if (Platform.OS === "android" && UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

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
          <Connectivity />
          <AppNavigation />
        </AuthContext.Provider>
      </Provider>
    );
  }
}

export default App;
