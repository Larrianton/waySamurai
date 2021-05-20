import React from 'react';
import {Header} from "./components/Header/Header";
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {rootStateType} from "./redux/State"
import {Nav} from "./components/navigation/Nav/Nav";

export type AppPropsType = {
    state: rootStateType
    addPost: (postMessage: string) => void
}


function App(props: AppPropsType) {

    return (

        <div className="app_wrapper">
            <Header/>
            <Nav sideBar={props.state.sideBar}/>
            <div className="s.content">


                <Route exact path={"/profile"}
                       render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost}/>}/>
                <Route exact path={"/dialogs"} render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                <Route path={"/news"}/>
                <Route path={"/music"}/>
                <Route path={"/settings"}/>
            </div>
        </div>

    );
}

export default App;
