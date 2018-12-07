// @flow
import React from 'react';
import { mount } from 'enzyme';
import App from './App';

it('it does not break', () => {
  expect(mount(<App />)).toMatchSnapshot();
});
