import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rooms from '../Rooms/Rooms';
import store from '../../redux/configureStore';

describe('Rooms', () => {
  render(
    <Provider store={store}>
      <Rooms />
    </Provider>,
  );

  test('Test the dom for success rendering elements', () => {
    const title = screen.getByText('ROOMS');
    expect(title).toBeInTheDocument();
  });

  test('Test the dom for non existing element on the page', () => {
    const title = screen.queryByText('example');
    expect(title).not.toBeInTheDocument();
  });

  test('It renders the Rooms component correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <Rooms />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('It renders the Rooms component correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rooms />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
