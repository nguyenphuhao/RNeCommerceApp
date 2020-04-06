import React from 'react';
import { request } from '../common';
import { unauthorized, token as tokenConst } from '../../constants';
import AsyncStorage from '@react-native-community/async-storage';
export const login = ({ loginname, password }) => {
  const url = global.API.customer.login;
  return request(url, {
    method: 'POST',
    body: { loginname, password },
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(unauthorized);
      }
      return res.json();
    })
    .then(({ token }) => {
      if (token) {
        return AsyncStorage.setItem(tokenConst, token);
      }
      throw new Error(unauthorized);
    });
};

export const hasAuthorized = ({ token }) => {
  const url = global.API.customer.login;
  return request(url, {
    method: 'POST',
    body: { token },
  }).then(res => {
    if (!res.ok) {
      throw new Error(unauthorized);
    }
    return res.json();
  });
};
