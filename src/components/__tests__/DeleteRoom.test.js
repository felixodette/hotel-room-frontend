import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import DeleteRoom from '../Rooms/DeleteRoom';
import store from '../../redux/configureStore';

describe('DeleteRoom', () => {
  render(
    <Provider store={store}>
      <DeleteRoom />
    </Provider>,
  );

  test('Test the dom for success rendering elements', () => {
    const title = screen.getByText(/Action/);
    expect(title).toBeInTheDocument();
  });

  test('Test the dom for non existing element on the page', () => {
    const title = screen.queryByText('example');
    expect(title).not.toBeInTheDocument();
  });

  test('It renders the Rooms component correctly', () => {
    const { container } = render(
      <Provider store={store}>
        <DeleteRoom />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });

  test('It renders the Rooms component correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <DeleteRoom />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
