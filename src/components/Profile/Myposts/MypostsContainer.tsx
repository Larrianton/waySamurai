import React from 'react';
import {addNewPostActionCreator} from "../../../redux/profile-reducer"
import {Myposts} from "./Myposts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {PostType} from "./Post/Post";

type mapStateToProps = {
    postsData: Array<PostType>,
}
type mapDispatchToProps = {
    addNewPostText: (newPostText:string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        postsData: state.profilePage.postsData
    }
}
const mapDispatchToProps = (dispatch: any): mapDispatchToProps => {
    return {
        addNewPostText: (newPostText) => dispatch(addNewPostActionCreator(newPostText)),
    }
}

export const MypostsContainer = connect(mapStateToProps, mapDispatchToProps)(Myposts);

