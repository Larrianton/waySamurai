import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import store from "./redux/State";
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = () => {
        ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)}
                 />
        </BrowserRouter>, document.getElementById('root')
    );
};
rerenderEntireTree()
store.subscribe(rerenderEntireTree)



