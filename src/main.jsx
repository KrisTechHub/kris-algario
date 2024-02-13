import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '/styles/index.css'

import {ThemeProvider}  from "@material-tailwind/react";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

