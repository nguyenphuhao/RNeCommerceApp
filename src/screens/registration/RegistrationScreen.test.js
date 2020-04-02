/**
 * @format
 */

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import RegistrationScreen from './RegistrationScreen';

const shallowComponent = () => {
  const props = {};
  const wrapper = shallow(<RegistrationScreen {...props} />);
  return wrapper;
};

describe('RegistrationScreen exists components', () => {
  test('RegistrationScreen exists components - test snapshot', () => {
    const wrapper = shallowComponent();
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
