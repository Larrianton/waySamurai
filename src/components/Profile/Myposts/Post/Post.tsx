import React from 'react';
import s from './Post.module.css'

export type PostType = {
   img:string
    id:string
    likes:number
    message:string
}

export const Post = (props: PostType) => {


    return (
        <div className={s.content}>

            <div className={s.item}>
                <img src={props.img}/>
                <div> {props.message}</div>
            </div>
            <div>
                <span>Likes : {props.likes}</span>
            </div>
        </div>

    );
}

