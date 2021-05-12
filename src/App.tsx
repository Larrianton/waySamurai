import React from 'react';
import {Header} from "./components/Header/Header";
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

export type AppType = {
    postsData: Array<postsDataType>
    dialogsData: Array<dialogsData>
    messagesData :Array<messagesData>
}

export type postsDataType = {
    id: string
    likes: number
    img: string
    message: string
}
export type dialogsData ={
    id: string
    name: string
}
export type messagesData = {
    id: string
    message: string
    }
function App(props: AppType) {

    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Nav/>
                <div className="s.content">


                    <Route exact path={"/profile"} render={() => <Profile postsData={props.postsData}/>}/>
                    <Route exact path={"/dialogs"} render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData} />}/>
                    <Route path={"/news"}/>
                    <Route path={"/music"}/>
                    <Route path={"/settings"}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
