import { useState, useEffect } from "react";
import {
  token,
} from '../constants';
import { AuthAPI } from '../services';
import AsyncStorage from '@react-native-community/async-storage';

const useAuth = () => {
  const [userToken, setUserToken] = useState(null);
  useEffect(() => {
    const bootstrapAsync = async () => {
      const authToken = await AsyncStorage.getItem(token);
      if (authToken) {
        try {
          console.log(authToken)
          await AuthAPI.hasAuthorized({ token: authToken });
          setUserToken(authToken);
        } catch (error) {
          setUserToken(null);
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

  return [userToken, signIn];
}

export default useAuth;