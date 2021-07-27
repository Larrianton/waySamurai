import React from 'react';
import {Header} from "./components/Header/Header";
import './App.css';
import {Route} from "react-router-dom";
import {Nav} from "./components/navigation/Nav/Nav";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersWithConnect} from "./components/Users/UsersContainer";
import {ProfileWithConnect} from "./components/Profile/ProfileContainer";
import {HeaderWithConnect} from "./components/Header/HeaderContainer";


function App() {

    return (

        <div className="app_wrapper">
            <HeaderWithConnect/>
            <Nav/>
            <div className="s.content">
                <Route exact path={"/profile/:userId?"}
                       render={() => <ProfileWithConnect/>}/>
                <Route exact path={"/dialogs"}
                       render={() => <DialogsContainer/>}/>
                <Route exact path={"/users"}
                       render={() => <UsersWithConnect/>}/>
                <Route path={"/news"}/>
                <Route path={"/music"}/>
                <Route path={"/settings"}/>
            </div>
        </div>

    );
}

export default App;
