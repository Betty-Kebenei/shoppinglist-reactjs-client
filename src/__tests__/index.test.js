import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
const middlewares = [];
const mockStore = configureStore(middlewares);

describe('index file', () => {
  let store;
      beforeEach(() => {
          store = mockStore({});
      });
  it('renders without crashing', () => {
    const connectedWrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
  });
});