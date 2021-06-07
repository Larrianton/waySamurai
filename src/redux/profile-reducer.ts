import {v1} from "uuid";
import {ActionTypes, addPostActionType, changePostTextActionType, profilePageType, rootStateType} from "./State";

const add_post = "ADD-POST"
const change_post = "CHANGE-POST-TEXT"
export const addNewPostActionCreator = (): addPostActionType => ({type: add_post})
export const changePostTextActionCreator = (newText: string): changePostTextActionType => ({type: change_post, newText})
export type profileReducerType = {
    state: profilePageType
    action: ActionTypes
}
const profileReducer = (state: profilePageType, action: ActionTypes) => {
    switch (action.type) {
        case add_post:
            let newPost = {
                id: v1(),
                message: state.newPostText.trim(),
                likes: 0,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKTYsXfFpkymGFmBsk9MetiDLSxyETN_phfg&usqp=CAU"
            };
            state.postsData.push(newPost)
            return {...state}
        case change_post:
            state.newPostText = action.newText
            return {...state}
        default :
            return {...state}
    }
}

export default profileReducer