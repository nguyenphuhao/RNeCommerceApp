import { ScreenName } from '../constants';

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
    name: ScreenName.Main,
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
  {
    name: ScreenName.Profile,
    headerTitle: 'My Profile',
  },
  {
    name: ScreenName.WishList,
    headerTitle: ''
  },
  {
    name: ScreenName.Cart,
    headerTitle: ''
  },
  {
    name: ScreenName.Orders,
    headerTitle: ''
  },
  {
    name: ScreenName.Email,
    headerTitle: ''
  },
  {
    name: ScreenName.Call,
    headerTitle: ''
  },
  {
    name: ScreenName.Share,
    headerTitle: ''
  },
  {
    name: ScreenName.DrawerNav,
    headerTitle: '',
  },
]

export const getScreenOptions = name => {
  const screen = screens.find(s => s.name === name);
  return screen;
};
