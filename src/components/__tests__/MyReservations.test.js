import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import MyReservations from '../Reservations/MyReservations';
import store from '../../redux/configureStore';

describe('My Reservations', () => {
  render(
    <Provider store={store}>
      <MyReservations />
    </Provider>,
  );

  test('Test the dom for non existing element on the page', () => {
    const title = screen.queryByText('example');
    expect(title).not.toBeInTheDocument();
  });

  test('It renders the Reservation component correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <MyReservations />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('It renders the Reservations Form component correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MyReservations />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
