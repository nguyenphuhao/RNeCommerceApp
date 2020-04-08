import { request } from '../common';
import { unauthorized, token as tokenConst } from '../../constants';
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
        return token;
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

export default {
  login,
  hasAuthorized
}