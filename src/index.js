import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//setup store
import { Provider } from 'react-redux';
import { store } from './redux/configStore';


const root = ReactDOM.createRoot(document.getElementById('root'));
// JSX : thẻ ui của react <div></div>
//Index chỉ cho phép 1 thẻ UI (component)
root.render(
  <Provider store={store}>
    <App />
  </Provider>

);

 // <React.StrictMode>
  // </React.StrictMode>
