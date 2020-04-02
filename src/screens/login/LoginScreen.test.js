/**
 * @format
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import LoginScreen from './LoginScreen';

const shallowComponent = () => {
  const props = {};
  const wrapper = shallow(<LoginScreen {...props} />);
  return wrapper;
};

describe('LoginScreen exists components', () => {
  test('LoginScreen exists components - test snapshot', () => {
    const wrapper = shallowComponent();
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
