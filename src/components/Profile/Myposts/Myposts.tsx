import React, {ChangeEvent} from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {postType} from "../../../redux/State";

type MypostsType = {
    addPost: (postMessage: string) => void
    postsData: Array<postType>
    changePostText: (newText: string) => void
    newPostText:string
}

export const Myposts = (props: MypostsType) => {
    let postElements = props.postsData.map((p) => (<Post id={p.id} likes={p.likes} message={p.message} img={p.img}/>))
    let newPostElement = React.createRef<HTMLTextAreaElement>();


    const addNewPost = () => {
        props.addPost(props.newPostText)
    }
    const changePostText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostText(e.currentTarget.value)
    }
    return (
        <div className={s.posts}>
            My posts
            <div className={s.item}>
                <textarea ref={newPostElement} onChange={changePostText}/>
                <button onClick={addNewPost}>Add Post</button>
                <button>Text Remove</button>
            </div>
            {postElements}
        </div>
    );

};

