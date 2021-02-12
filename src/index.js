import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  firebase from 'firebase';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
var firebaseConfig = {
  apiKey: "AIzaSyCoafqL49OxpjCHCYJ9_bHPwN54449xL-0",
  authDomain: "fir-e7ad5.firebaseapp.com",
  projectId: "fir-e7ad5",
  storageBucket: "fir-e7ad5.appspot.com",
  messagingSenderId: "982825338374",
  appId: "1:982825338374:web:e1ad4440831ce2e2836587"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
