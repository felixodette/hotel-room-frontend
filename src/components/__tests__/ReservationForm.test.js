import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import ReservationForm from '../Reservations/ReservationForm';
import store from '../../redux/configureStore';

describe('Reservations form', () => {
  render(
    <Provider store={store}>
      <ReservationForm />
    </Provider>,
  );

  test('Test the dom for non existing element on the page', () => {
    const title = screen.queryByText('example');
    expect(title).not.toBeInTheDocument();
  });

  test('It renders the Reservation Form component correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <ReservationForm />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('It renders the Reservations Form component correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ReservationForm />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
