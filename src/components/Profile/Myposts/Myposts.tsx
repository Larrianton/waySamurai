import React from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";
import {addPost, postType} from "../../../redux/State";

type MypostsType = {
    addPost: (postMessage: string) => void
    postsData: Array<postType>
}

export const Myposts = (props: MypostsType) => {
    let postElements = props.postsData.map((p) => (<Post id={p.id} likes={p.likes} message={p.message} img={p.img}/>))
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const addNewPost = () => {

        if (newPostElement.current) {
            props.addPost(newPostElement.current.value);
        }

    }
        return (
            <div className={s.posts}>
                My posts
                <div className={s.item}>
                    <textarea ref={newPostElement}></textarea>
                    <button onClick={addNewPost}>Add Post</button>
                    <button>Text Remove</button>
                </div>
                {postElements}
            </div>
        );

};

