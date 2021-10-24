import React from 'react';
import s from './Myposts.module.css'
import {Post, PostType} from "./Post/Post";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type myPostsPropsType = {
    addNewPostText: (newPostText:string) => void
    postsData: Array<PostType>

}
type FormDataType ={
    newPostText:string
}

export const Myposts = (props: myPostsPropsType) => {
    const PostElements = props.postsData.map((p) => <Post img={p.img} message={p.message} likes={p.likes} id={p.id}/>)

    const onSubmit = (formData:FormDataType) => {
        props.addNewPostText(formData.newPostText)
    }
    return (
        <div className={s.posts}>
            My posts
         <MypostsReduxForm onSubmit={onSubmit}/>
            {PostElements}
        </div>
    );

};


const MypostsForm: React.FC<InjectedFormProps<FormDataType> > = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
            <Field component='textarea' name='newPostText' placeholder={"New Post Text"}/>
                </div>
            <button>Add Post</button>

        </form>
        </div>
);
};
const MypostsReduxForm = reduxForm<FormDataType >({form: 'MyPosts'})(MypostsForm)

