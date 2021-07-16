import {v1} from "uuid";

const ADD_POST = "ADD-POST"
const CHANGE_POST = "CHANGE-POST-TEXT"
const SET_PROFILE = "SET-PROFILE"
export const addNewPostActionCreator = (): addPostActionType => ({type: ADD_POST})
export const changePostTextActionCreator = (newText: string): changePostTextActionType => ({type: CHANGE_POST, newText})
export const setProfile = (profile: ProfileType): setProfileActionType => ({type: SET_PROFILE, profile})
export type changePostTextActionType = {
    type: "CHANGE-POST-TEXT"
    newText: string
}
export type addPostActionType = {
    type: "ADD-POST"
}

export type setProfileActionType = {
    type: "SET-PROFILE"
    profile: ProfileType | null
}

type ActionTypesProfileReducer =
    changePostTextActionType
    | addPostActionType
    | setProfileActionType

type postType = {
    id: string
    likes: number
    img: string
    message: string
}
type profilePageType = {
    postsData: Array<postType>
    newPostText: string
    profile: ProfileType | null
}
export type ProfileType = {
    userId: string
    fullName: string
    photo: { large: string, small: string }
}

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
    ],
    profile: null,
}


const profileReducer = (state: profilePageType = initialState, action: ActionTypesProfileReducer) => {
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
                profile: action.profile
            }
        }

        default :
            return {...state}
    }
}

export default profileReducer