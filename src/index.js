import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import AppContainer from './containers/AppContainer.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
