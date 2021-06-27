import React from 'react';
import {Header} from "./components/Header/Header";
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {Nav} from "./components/navigation/Nav/Nav";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {AppStateType} from "./redux/redux-store";
import {Users} from "./components/Users/UsersC";


export type AppPropsType = {
    state: AppStateType
}


function App(props: AppPropsType) {

    return (

        <div className="app_wrapper">
            <Header/>
            <Nav/>
            <div className="s.content">
                <Route exact path={"/profile"}
                       render={() => <Profile/>}/>
                <Route exact path={"/dialogs"}
                       render={() => <DialogsContainer/>}/>
                <Route exact path={"/users"}
                       render={() => <Users/>}/>
                <Route path={"/news"}/>
                <Route path={"/music"}/>
                <Route path={"/settings"}/>
            </div>
        </div>

    );
}

export default App;
