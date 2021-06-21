import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from './App';
import store from "./redux/redux-store"
import {BrowserRouter} from "react-router-dom";
import {rootStateType} from "./redux/store";
import  {Provider} from "./StoreContext";



let rerenderEntireTree = (state:rootStateType) => {
        ReactDOM.render(
        <BrowserRouter>
            <Provider store={store} >
            <App state={store.getState()}
                 />
            </Provider>

        </BrowserRouter>, document.getElementById('root')
    );
};
rerenderEntireTree(store.getState())
store.subscribe(()=> {
    let state=store.getState()
    rerenderEntireTree(state)
})



