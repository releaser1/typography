import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import App from './App';
import { store } from './store'
import { Provider } from 'react-redux'


const container = document.getElementById('root') || document.createElement('div');
const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)


