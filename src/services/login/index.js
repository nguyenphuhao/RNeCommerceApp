import { request } from '../common';
import { unauthorized } from '../../constants';
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