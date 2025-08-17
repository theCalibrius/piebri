import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import App from './components/App.jsx';
import registerServiceWorker from './registerServiceWorker.js';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
