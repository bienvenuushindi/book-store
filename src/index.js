import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Provider from 'react-redux/es/components/Provider';
import App from './App';
import store from './redux/configure-store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/book-store">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
