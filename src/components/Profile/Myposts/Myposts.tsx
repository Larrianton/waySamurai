import React, {ChangeEvent, MouseEvent} from 'react';
import s from './Myposts.module.css'
import {rootStateType} from "../../../redux/store";
import {Post, PostType} from "./Post/Post";

type myPostsPropsType = {
    changePostText: (text: string) => void
    addNewPostText: () => void
    postsData: Array<PostType>
    state: rootStateType

}


export const Myposts = (props: myPostsPropsType) => {
    const PostElements = props.postsData.map((p)=>  <Post img={p.img} message={p.message} likes={p.likes} id={p.id}/>)
    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changePostText(e.currentTarget.value)
    }
    const addPost = (e:MouseEvent<HTMLButtonElement>) => {props.addNewPostText()}
    return (
        <div className={s.posts}>
            My posts
            <div className={s.item}>
                <textarea onChange={onChangePost}
                          value={props.state.profilePage.newPostText}/>
                <button onClick={addPost}>Add Post</button>
                <button>Text Remove</button>
            </div>
            {PostElements}
        </div>
    );

};

