import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import {store} from "./redux/redux-store"
import {BrowserRouter} from "react-router-dom";
import {rootStateType} from "./redux/store";



let rerenderEntireTree = (state:rootStateType) => {
        ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)}
                 />
        </BrowserRouter>, document.getElementById('root')
    );
};
rerenderEntireTree(store.getState())
store.subscribe(()=> {
    let state=store.getState()
    rerenderEntireTree(state)
})



