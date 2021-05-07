import React from 'react';
import {Header} from "./components/Header/Header";
import './App.css';
import {Nav} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Nav/>
                <div className="s.content">


                    <Route exact path={"/profile"} render={() => <Profile/>}/>
                    <Route exact path={"/dialogs"} render={() => <Dialogs message={"Dialogs"}/>}/>
                    <Route path={"/news"}/>
                    <Route path={"/music"}/>
                    <Route path={"/settings"}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
