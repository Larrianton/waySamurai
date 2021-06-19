import React from 'react';
import {addNewPostActionCreator, changePostTextActionCreator} from "../../../redux/profile-reducer"
import {ActionTypes, rootStateType} from "../../../redux/store";
import {Myposts} from "./Myposts";

type MypostsContainerPropsType = {
    dispatch: (action: ActionTypes) => void
    state: rootStateType
}


export const MypostsContainer = (props: MypostsContainerPropsType) => {

    const addNewPost = () => {
        props.dispatch(addNewPostActionCreator())
    }
    const changePostText = (text: string) => {

        props.dispatch(changePostTextActionCreator(text))


    }
    return (
        <Myposts postsData={props.state.profilePage.postsData}
                 changePostText={changePostText}
                 addNewPostText={addNewPost}
                 state={props.state}
        />


    );

};

