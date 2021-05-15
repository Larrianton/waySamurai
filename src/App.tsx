import React from 'react';
import {Header} from "./components/Header/Header";
import './App.css';

import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {rootStateType} from "./redux/State"
import {Sidebar} from "./components/Sidebar/Sidebar";


function App(props:rootStateType) {

    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Sidebar friendsData={props.sideBar.friendsData} navData={props.sideBar.navData}/>
                <div className="s.content">


                    <Route exact path={"/profile"} render={() => <Profile postsData={props.profilePage.postsData}/>}/>
                    <Route exact path={"/dialogs"} render={() => <Dialogs dialogsData={props.dialogsPage.dialogsData} messagesData={props.dialogsPage.messagesData} />}/>
                    <Route path={"/news"}/>
                    <Route path={"/music"}/>
                    <Route path={"/settings"}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
