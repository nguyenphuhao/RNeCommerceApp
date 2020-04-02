import moment from 'moment';
export const SAY_HELLO = 'SAY_HELLO';

export const sayHello = () => {
  const message = `Welcome to EPAM React Native Mentor Program\n${moment().format(
    'MMMM Do YYYY, h:mm:ss a',
  )}`;
  return {
    type: SAY_HELLO,
    payload: {
      message,
    },
  };
};
