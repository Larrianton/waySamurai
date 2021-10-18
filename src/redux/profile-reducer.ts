import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileApi} from "../api/api";

export const addNewPostActionCreator = () => ({type: "ADD_POST"} as const)
export const changePostTextActionCreator = (newText: string) => ({type: "CHANGE_POST", newText} as const)
export const setProfile = (userProfile: ProfileType) => ({type: "SET_PROFILE", userProfile} as const)
export const setProfileStatus = (status: string ) => ({type: "SET_PROFILE_STATUS", status} as const)
export const getProfile = (userId: number) => (dispatch: Dispatch) => {
    profileApi.getProfile(userId)
        .then(res => {
            dispatch(setProfile(res.data))

        })
}
export const getProfileStatus = (userId: number) => (dispatch: Dispatch) => {
    profileApi.getProfileStatus(userId)
        .then(res => {
            debugger
            dispatch(setProfileStatus(res.data))
        })
}
export const updateProfileStatus = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateProfileStatus(status)
        .then(res => {
            if (res.data.resultCode === 0) {
                debugger
            dispatch(setProfileStatus(status))
            }
        })
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
    userProfile: null,
    status:"Hey",
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
                userProfile: action.userProfile
            }
        }
        case "SET_PROFILE_STATUS" : {
            return {
                ...state,
                status: action.status
            }
        }

        default :
            return {...state}
    }
}
//Types
export type ChangePostAT = ReturnType<typeof changePostTextActionCreator>
export type AddPostAT = ReturnType<typeof addNewPostActionCreator>
export type SetProfileAT = ReturnType<typeof setProfile>
export type SetProfileStatusAT = ReturnType<typeof setProfileStatus>

export type ActionTypesProfileReducer =
    ChangePostAT
    | AddPostAT
    | SetProfileAT
    | SetProfileStatusAT

type PostType = {
    id: string
    likes: number
    img: string
    message: string
}

export type ProfileType = {
    userId: number
    fullName: string
    photos: { large: string, small: string }
}
type ProfilePageType = {
    postsData: Array<PostType>
    newPostText: string
    userProfile: ProfileType | null
    status:string
}