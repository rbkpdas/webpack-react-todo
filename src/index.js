import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/styles.css';

const mountNode = document.getElementById('app');
ReactDOM.render(<App name="Webpack Babel React" />, mountNode);
