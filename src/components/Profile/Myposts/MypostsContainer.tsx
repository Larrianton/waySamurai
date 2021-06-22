import React from 'react';
import {addNewPostActionCreator, changePostTextActionCreator} from "../../../redux/profile-reducer"

import {Myposts} from "./Myposts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {PostType} from "./Post/Post";

type mapStateToProps = {
    postsData: Array<PostType>,
    newPostText: string
}
type mapDispatchToProps = {
    addNewPostText: () => void
    changePostText: (text: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: any): mapDispatchToProps => {
    return {
        addNewPostText: () => dispatch(addNewPostActionCreator()),
        changePostText: (text) => dispatch(changePostTextActionCreator(text)),
    }
}

export const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

