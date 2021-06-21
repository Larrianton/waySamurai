import React from 'react';
import {addNewPostActionCreator, changePostTextActionCreator} from "../../../redux/profile-reducer"

import {Myposts} from "./Myposts";
import StoreContext from "../../../StoreContext";


export const MypostsContainer = () => {

    return (
        <StoreContext.Consumer>{
            store => {
                let state = store.getState()
                const addNewPost = () => {
                    store.dispatch(addNewPostActionCreator())
                }
                const changePostText = (text: string) => {
                    store.dispatch(changePostTextActionCreator(text))
                }
                return <Myposts postsData={state.profilePage.postsData}
                                changePostText={changePostText}
                                addNewPostText={addNewPost}
                                state={state}
                                newPostText={state.profilePage.newPostText}
                />
            }}
        </StoreContext.Consumer>


    );

};

