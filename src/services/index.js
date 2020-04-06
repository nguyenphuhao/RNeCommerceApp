import AsyncStorage from '@react-native-community/async-storage';
import { token, unauthorized } from '../constants';
import { hasAuthorized } from './login';
import { request } from './common';

export const callAPI = async (
  url,
  { method, body },
  shouldAuthorized = true,
) => {
  if (shouldAuthorized) {
    const authToken = await AsyncStorage.getItem(token);
    try {
      await hasAuthorized({ token: authToken });
    } catch (error) {
      throw new Error(unauthorized);
    }

    try {
      const result = await request(url, { method, body });
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
};
