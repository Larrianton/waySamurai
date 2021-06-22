import React, {ChangeEvent, MouseEvent} from 'react';
import s from './Myposts.module.css'
import {Post, PostType} from "./Post/Post";

type myPostsPropsType = {
    changePostText: (text: string) => void
    addNewPostText: () => void
    postsData: Array<PostType>
    newPostText: string

}


export const Myposts = (props: myPostsPropsType) => {
    const PostElements = props.postsData.map((p) => <Post img={p.img} message={p.message} likes={p.likes} id={p.id}/>)
    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostText(e.currentTarget.value)
    }
    const addPost = (e: MouseEvent<HTMLButtonElement>) => {
        props.addNewPostText()
    }
    const changeNewPostText = props.newPostText
    return (
        <div className={s.posts}>
            My posts
            <div className={s.item}>
                <textarea onChange={onChangePost}
                          value={changeNewPostText}/>
                <button onClick={addPost}>Add Post</button>
                <button>Text Remove</button>
            </div>
            {PostElements}
        </div>
    );

};

