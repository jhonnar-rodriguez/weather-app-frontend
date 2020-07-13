import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

describe('Testing <App/>', () => {
  test('Should render the main component', () => {
    const wrapper = mount(
      <App />,
    );

    // Should match the TopBar description
    expect(wrapper.find('h1').first().text()).toEqual('Weather App');
  });

});
