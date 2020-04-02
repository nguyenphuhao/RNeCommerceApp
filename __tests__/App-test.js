/**
 * @format
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from '../App';

const shallowComponent = () => {
  const wrapper = shallow(<App />);
  return wrapper;
};

describe('RegistrationScreen exists components', () => {
  test('RegistrationScreen exists components - test snapshot', () => {
    const wrapper = shallowComponent();
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
