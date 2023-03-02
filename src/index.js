import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./Components/App.jsx";
import GlobalStyle from './Styles/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);