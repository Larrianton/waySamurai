import React from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {profilePageType} from "../../../redux/State";


export const Myposts = (props: profilePageType) => {
    let postElements = props.postsData.map((p) => (<Post id={p.id} likes={p.likes} message={p.message} img={p.img}/>))

    return (
        <div className={s.posts}>
            My posts
            <div className={s.item}>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Text Remove</button>
            </div>
            {postElements}
        </div>
    );
}

