import React from 'react';

const AuthContext = React.createContext({
  userToken: null,
  signIn: () => {},
});

export default AuthContext;