import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBiyG9WLUx1mhintCncxTQQYnf_FSKFYu0",
  authDomain: "tienda-sports.firebaseapp.com",
  projectId: "tienda-sports",
  storageBucket: "tienda-sports.appspot.com",
  messagingSenderId: "925919581688",
  appId: "1:925919581688:web:8028aecc77f0303d80f20d",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
