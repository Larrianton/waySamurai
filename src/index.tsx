import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {v1} from "uuid";

let postsData  = [
    {
        id: v1(),
        likes: 15,
        img: "https://aw.mail.ru/ms/02dc975224518acc56b7e1e9e73d40ec.png",
        message: 'Hi ,im learning Js'
    },
    {
        id: v1(),
        likes: 12,
        img: "https://aw.mail.ru/ms/02dc975224518acc56b7e1e9e73d40ec.png",
        message: 'How are you?'
    },
]
let dialogsData = [
    {id: v1(), name: "Katya"},
    {id: v1(), name: "Sveta"},
    {id: v1(), name: "Valery"},
    {id: v1(), name: "Alexander"},
    {id: v1(), name: "Dmitriy"}
]
let messagesData = [
    {id: v1(), message: "Hello what is your name ?"},
    {id: v1(), message: "how are you"},
    {id: v1(), message: "Relax take it easy!"},
    {id: v1(), message: "yo Man!"},
    {id: v1(), message: "Hey chicks!"}
]
ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
