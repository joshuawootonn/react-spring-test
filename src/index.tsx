import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { BrowserRouter as RouterProvider } from 'react-router-dom';
import ThemeProvider from 'context/ThemeContext';

ReactDOM.render(
  <ThemeProvider>
    <RouterProvider>
      <App />
    </RouterProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
