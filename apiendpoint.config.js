import { apiEndPoint, apiKey } from './app.json';
export const setUpAPIEndPoint = (host = apiEndPoint, key = apiKey) => {
  const getEndPoint = apiRoute => {
    return `${host}?api_key=${key}&rt=${apiRoute}`;
  };
  global.API = {
    apiEndPoint,
    apiKey,
    getEndPoint,
    customer: {
      login: getEndPoint('a/account/login'),
    },
  };
};
