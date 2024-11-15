import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' instead of 'react-dom'
import App from './components/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root using createRoot

root.render(
    <App />
);
