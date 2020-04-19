import { useState, useEffect } from "react";
import {
  token,
  bypass_login
} from '../constants';
import { AuthAPI } from '../services';
import AsyncStorage from '@react-native-community/async-storage';

const useAuth = () => {
  const [userToken, setUserToken] = useState(null);
  useEffect(() => {
    const bootstrapAsync = async () => {
      const authToken = await AsyncStorage.getItem(token);
      if (authToken) {
        if (authToken != bypass_login) {
          try {
            await AuthAPI.hasAuthorized({ token: authToken });
            setUserToken(authToken);
          } catch (error) {
            setUserToken(null);
          }
        }
      }
    };
    bootstrapAsync();
  }, [userToken]);

  const signIn = async ({ loginname, password }) => {
    const data = await AuthAPI.login({ loginname, password });
    await AsyncStorage.setItem(token, data.token);
    setUserToken(data.token);
  };

  const byPassLogin = async () => {
    await AsyncStorage.setItem(token, bypass_login);
    setUserToken(bypass_login);
  }

  return [userToken, signIn, byPassLogin];
}

export default useAuth;