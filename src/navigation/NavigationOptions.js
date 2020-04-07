const ScreenName = {
  AuthenticationStack: 'AuthenticationStack',
  ProductStack: 'ProductStack',
  Home: 'Home',
  ProductList: 'ProductList',
  ProductDetail: 'ProductDetail',
  Login: 'Login',
  Registration: 'Registration',
};

const screens = [
  {
    name: ScreenName.AuthenticationStack,
    headerTitle: '',
  },
  {
    name: ScreenName.ProductStack,
    headerTitle: ''
  },
  {
    name: ScreenName.ProductList,
    headerTitle: 'Ecommerce Store'
  },
  {
    name: ScreenName.ProductDetail,
    headerTitle: ''
  },
  {
    name: ScreenName.Login,
    headerTitle: ''
  },
  {
    name: ScreenName.Registration,
    headerTitle: ''
  },
]

const getScreenOptions = (name) => {
  const screen = screens.find(s => s.name === name );
  return screen;
}

export {
  ScreenName,
  getScreenOptions
}