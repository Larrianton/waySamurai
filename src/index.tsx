import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root')
)

