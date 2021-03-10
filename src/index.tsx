import { StrictMode } from 'react';

import ReactDOM from 'react-dom';

import AppBoundary from 'AppBoundary';
import AppConfig from 'AppConfig';

import App from './App';

ReactDOM.render(
  <StrictMode>
    <AppBoundary />
  </StrictMode>,
  document.getElementById('root')
);
