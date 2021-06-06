import React, {ChangeEvent} from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {ActionTypes, addNewPostActionCreator, changePostTextActionCreator, postType} from "../../../redux/State";

type myPostsPropsType = {
    dispatch: (action: ActionTypes) => void
    postsData: Array<postType>
    newPostText: string
}


export const Myposts = (props: myPostsPropsType) => {
    let postElements = props.postsData.map((p) => (<Post id={p.id} likes={p.likes} message={p.message} img={p.img}/>))


    const addNewPost = () => {
        props.dispatch(addNewPostActionCreator())
    }
    const changePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {

        props.dispatch(changePostTextActionCreator(e.currentTarget.value))


    }
    return (
        <div className={s.posts}>
            My posts
            <div className={s.item}>
                <textarea onChange={changePostText}
                          value={props.newPostText}/>
                <button onClick={addNewPost}>Add Post</button>
                <button>Text Remove</button>
            </div>
            {postElements}
        </div>
    );

};

