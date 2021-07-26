import {v1} from "uuid";
const ADD_POST = "ADD-POST"
const CHANGE_POST = "CHANGE-POST-TEXT"
const SET_PROFILE = "SET-PROFILE"
export const addNewPostActionCreator = (): AddPostAC => ({type: ADD_POST})
export const changePostTextActionCreator = (newText: string): ChangePostAC => ({type: CHANGE_POST, newText})
export const setProfile = (profile: ProfileType): SetProfileAC => ({type: SET_PROFILE, profile})
export type ChangePostAC = {
    type: "CHANGE-POST-TEXT"
    newText: string
}
export type AddPostAC = {
    type: "ADD-POST"
}

export type SetProfileAC = {
    type: "SET-PROFILE"
    profile: ProfileType
}

export type ActionTypesProfileReducer =
    ChangePostAC
    | AddPostAC
    | SetProfileAC

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
        case ADD_POST:
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


        case CHANGE_POST:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_PROFILE : {
            return {
                ...state,
                userProfile: action.profile
            }
        }

        default :
            return {...state}
    }
}

