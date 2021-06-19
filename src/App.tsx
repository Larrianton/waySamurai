import React from 'react';
import {Header} from "./components/Header/Header";
import './App.css';
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {ActionTypes, rootStateType} from "./redux/store"
import {Nav} from "./components/navigation/Nav/Nav";
export type AppPropsType = {
    state:rootStateType
    dispatch: (action: ActionTypes) => void
}


function App(props: AppPropsType) {

    return (

        <div className="app_wrapper">
            <Header/>
            <Nav state={props.state}/>
            <div className="s.content">


                <Route exact path={"/profile"}
                       render={() => <Profile state={props.state} dispatch={props.dispatch} />}/>
                <Route exact path={"/dialogs"} render={() => <Dialogs state={props.state} dispatch={props.dispatch}/>}/>
                <Route path={"/news"}/>
                <Route path={"/music"}/>
                <Route path={"/settings"}/>
            </div>
        </div>

    );
}

export default App;
