import React from 'react';

const AuthContext = React.createContext({
  userToken: null,
  signIn: () => {},
  byPassLogin: () => {}
});

export default AuthContext;