import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {Nav} from "./components/navigation/Nav/Nav";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersWithCompose} from "./components/Users/UsersContainer";
import {ProfileWithCompose} from "./components/Profile/ProfileContainer";
import {HeaderWithConnect} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";


function App() {
    return (

        <div className="app_wrapper">
            <HeaderWithConnect/>
            <Nav/>
            <div className="s.content">
                <Route exact path={"/profile/:userId?"}
                       render={() => <ProfileWithCompose/>}/>
                <Route exact path={"/dialogs"}
                       render={() => <DialogsContainer/>}/>
                <Route exact path={"/users"}
                       render={() => <UsersWithCompose/>}/>
                <Route exact path={"/login"}
                       render={() => <Login/>}/>
                <Route path={"/news"}/>
                <Route path={"/music"}/>
                <Route path={"/settings"}/>
            </div>
        </div>

    );
}

export default App;
