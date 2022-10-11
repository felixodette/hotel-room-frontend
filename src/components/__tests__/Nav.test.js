import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '../Nav';
import store from '../../redux/configureStore';

describe('Sidebar Navigation', () => {
  render(
    <Provider store={store}>
      <Router>
        <Nav />
      </Router>
    </Provider>,
  );

  test('Test the dom for successful rendering of elements', () => {
    const Home = screen.getByText('Home');
    expect(Home).toBeInTheDocument();
  });
});
