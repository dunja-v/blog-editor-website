import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './i18n';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
