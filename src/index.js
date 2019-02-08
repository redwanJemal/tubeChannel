import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css';
import * as serviceWorker from './serviceWorker';

//const API_KEY = "AIzaSyCqDhBN-4PQlL2Jha1BlBcp-eebx8PaRbU";//Youtube Api Key

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();