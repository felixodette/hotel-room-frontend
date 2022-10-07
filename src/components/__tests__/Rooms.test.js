import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Rooms from '../Rooms/Rooms';
// import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';

describe('Rooms', () => {
  render(
    <Provider store={store}>
        <Rooms />
    </Provider>
    );
    test('Test the dom for success rendering elements', () => {
        const title = screen.getByText('ROOMS');
        expect(title).toBeInTheDocument();
        }
    );
});
