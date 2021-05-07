import React from 'react';
import s from './Myposts.module.css'
import {Post} from "./Post/Post";


export const Myposts = () => {
    return (
        <div className={s.posts}>
            My posts
            <div className={s.item}>
                <textarea></textarea>
                <button>Add Post</button>
                <button>Text Remove</button>
            </div>
            <Post likes={15} message='Hi ,im learning Js' img="https://aw.mail.ru/ms/02dc975224518acc56b7e1e9e73d40ec.png" />
            <Post likes={15} message='How are you?' img="https://aw.mail.ru/ms/02dc975224518acc56b7e1e9e73d40ec.png" />
        </div>
    );
}

