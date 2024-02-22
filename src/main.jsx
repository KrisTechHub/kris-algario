import React from 'react';
import ReactDOM from 'react-dom/client';
import Favicon from 'react-favicon';
import App from './App.jsx';
import './styles/index.css';
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Favicon url='./assets/kris.svg' />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
