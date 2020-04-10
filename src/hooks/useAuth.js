import { useState, useEffect } from "react";
import { token, unauthorized } from '../constants';
import { AuthAPI } from '../services';
import AsyncStorage from '@react-native-community/async-storage';

const useAuth = () => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const authToken = await AsyncStorage.getItem(token);
        await AuthAPI.hasAuthorized({ token: authToken });
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
      const authToken = await AuthAPI.login({ loginname, password });
      await AsyncStorage.setItem(token, authToken);
      setUserToken(authToken);
    } catch (error) {
      setUserToken(null);
      throw new Error(unauthorized);
    }
  };

  if (isLoading) {
    return null;
  }
  return [userToken, signIn];
}

export default useAuth;