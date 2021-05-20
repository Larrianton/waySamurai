import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import {addPost, rootStateType} from "./redux/State";
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = (state: rootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root')
    );
};


