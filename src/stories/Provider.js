import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store';

export default function Provider({ story:Story }) {
  return (
    <ReduxProvider store={store}>
      {Story}
    </ReduxProvider>
  );
};

