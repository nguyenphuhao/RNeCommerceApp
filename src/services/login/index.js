export const login = ({ loginname, password }) => {
  const url = global.API.customer.login;
  const formBody = new FormData();
  formBody.append('loginname', loginname);
  formBody.append('password', password);
  console.log({ loginname, password });
  return fetch(url, {
    method: 'POST',
    body: formBody,
  })
    .then(res => {
      if (!res.ok) {
        throw Error('Login failed.');
      }
      return res.json();
    })
    .then(({ token }) => {
      if (token) {
        return token;
      }
      throw Error('Login failed.');
    });
};
