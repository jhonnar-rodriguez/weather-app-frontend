import React from 'react';
import { mount } from 'enzyme';
import DashboardView from '../../../views';
import WeatherForm from '../../../views/Dashboard/components';

describe('Testing <DashboardView/>', () => {
  test('Should render the DashboardView', () => {
    const wrapper = mount(
      <DashboardView />,
    );

    expect(wrapper.find('.MuiGrid-container').exists()).toBe(true);
  });

  test('Should render the <WeatherForm/> component', () => {
    const propsMock = {
      error: false,
      fireSearch: false,
      setError: jest.fn(),
      searchParams: {},
      setFireSearch: jest.fn(),
      handleInputChange: jest.fn(),
    };

    const {
      error,
      fireSearch,
      setError,
      searchParams,
      setFireSearch,
      handleInputChange,
    } = propsMock;

    const wrapper = mount(
      <WeatherForm
        error={error}
        fireSearch={fireSearch}
        setError={setError}
        searchParams={searchParams}
        setFireSearch={setFireSearch}
        handleInputChange={handleInputChange}
      />,
    );

    expect(wrapper.find('span').first().text()).toEqual('Know the weather');
  });

});
