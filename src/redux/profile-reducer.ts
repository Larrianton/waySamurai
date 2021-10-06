import {v1} from "uuid";
import {Dispatch} from "redux";
import {usersApi} from "../api/api";

export const addNewPostActionCreator = () => ({type: "ADD_POST"} as const)
export const changePostTextActionCreator = (newText: string) => ({type: "CHANGE_POST", newText} as const)
export const setProfile = (profile: ProfileType) => ({type: "SET_PROFILE", profile} as const)
export const getProfile = (userId:string) => (dispatch:Dispatch) => {
    usersApi.getProfile(userId)
        .then(res => {
            dispatch(setProfile(res.data))
        })}
export type ChangePostAT = ReturnType<typeof changePostTextActionCreator>
export type AddPostAT = ReturnType<typeof addNewPostActionCreator>
export type SetProfileAT = ReturnType<typeof setProfile>

export type ActionTypesProfileReducer =
    ChangePostAT
    | AddPostAT
    | SetProfileAT

type PostType = {
    id: string
    likes: number
    img: string
    message: string
}

export type ProfileType = {
    userId: string
    fullName: string
    photos: { large: string, small: string }
}
type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string
    userProfile: ProfileType | null
}
let InitialState = {
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
    ],
    userProfile: null ,
}


export const profileReducer = (state: ProfilePageType = InitialState, action: ActionTypesProfileReducer) => {
    switch (action.type) {
        case "ADD_POST":
            let newPost = {
                id: v1(),
                message: state.newPostText.trim(),
                likes: 0,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKTYsXfFpkymGFmBsk9MetiDLSxyETN_phfg&usqp=CAU"
            };
            return {
                ...state,
                newPostText: " ",
                postsData: [...state.postsData, newPost]
            }


        case "CHANGE_POST":
            return {
                ...state,
                newPostText: action.newText
            }
        case "SET_PROFILE" : {
            return {
                ...state,
                userProfile: action.profile
            }
        }

        default :
            return {...state}
    }
}

