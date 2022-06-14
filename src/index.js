import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// React без JSX!
ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(App, null)  
);