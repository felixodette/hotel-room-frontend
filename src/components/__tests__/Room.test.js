import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Room from '../Rooms/Room';
import store from '../../redux/configureStore';

describe('A Room', () => {
  render(
    <Provider store={store}>
      <Router>
        <Room />
      </Router>
    </Provider>,
  );

  test('Test the dom for successful rendering of elements', () => {
    const RoomDescription = screen.getByText('Room description:');
    expect(RoomDescription).toBeInTheDocument();
  });
});
