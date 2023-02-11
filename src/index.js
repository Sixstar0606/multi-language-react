import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import './index.css';
import store from "./store";
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
