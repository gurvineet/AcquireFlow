// src/App.js

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MainNavigator from './navigators/MainNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
