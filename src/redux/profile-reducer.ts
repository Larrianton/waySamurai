import {v1} from "uuid";
import {ActionTypes, addPostActionType, changePostTextActionType, profilePageType} from "./store";

const add_post = "ADD-POST"
const change_post = "CHANGE-POST-TEXT"
export const addNewPostActionCreator = (): addPostActionType => ({type: add_post})
export const changePostTextActionCreator = (newText: string): changePostTextActionType => ({type: change_post, newText})
let initialState = {
    newPostText: "",
    postsData: [
        {
            id: v1(),
            likes: 15,
            img: "https://aw.mail.ru/ms/02dc975224518acc56b7e1e9e73d40ec.png",
            message: 'Hi ,im learning Js'
        },
        {
            id: v1(),
            likes: 12,
            img: "https://aw.mail.ru/ms/02dc975224518acc56b7e1e9e73d40ec.png",
            message: 'How are you?'
        }
    ]
}


const profileReducer = (state: profilePageType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case add_post:
            let newPost = {
                id: v1(),
                message: state.newPostText.trim(),
                likes: 0,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKTYsXfFpkymGFmBsk9MetiDLSxyETN_phfg&usqp=CAU"
            };
            state.postsData.push(newPost)
            state.newPostText = ""
            return {...state}
        case change_post:
            state.newPostText = action.newText
            return {...state}
        default :
            return {...state}
    }
}

export default profileReducer