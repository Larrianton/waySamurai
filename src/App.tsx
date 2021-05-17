import React from 'react';
import {Header} from "./components/Header/Header";
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {rootStateType} from "./redux/State"
import {Nav} from "./components/navigation/Nav/Nav";

export type AppPropsType = {
    state:rootStateType
}


function App(props:AppPropsType) {

    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Nav sideBar={props.state.sideBar}/>
                <div className="s.content">


                    <Route exact path={"/profile"} render={() => <Profile profilePage={props.state.profilePage}/>}/>
                    <Route exact path={"/dialogs"} render={() => <Dialogs dialogsPage={props.state.dialogsPage} />}/>
                    <Route path={"/news"}/>
                    <Route path={"/music"}/>
                    <Route path={"/settings"}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
