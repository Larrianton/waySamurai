
import {v1} from "uuid";

type InitialStateType = {
    users: Array<UserType>
}
type UserType = {
    id: string
    fullname: string
    status: string
    location: { city: string, country: string }
    followed: boolean
}
type followAT = {
    type: "FOLLOW"
    userId:string
}
type unfollowAT = {
    type: "UNFOLLOW"
    userId:string
}
type setUsersAT = {
    type: "SET-USERS"
    users:InitialStateType
}
type ActionTypes = followAT | unfollowAT | setUsersAT
let initialState = {
    users: [
        {
            id: v1(),
            fullname: "Dimych K.",
            status: "Im god of React",
            location: {city: "Minsk", country: "Belarus"},
            followed: true
        },
        {
            id: v1(),
            fullname: "Vladilen M.",
            status: "Realy? so easy",
            location: {city: "Moscow", country: "Russia"},
            followed: false
        },
        {
            id: v1(),
            fullname: "Ivan P.",
            status: "Im just newbie",
            location: {city: "Doneck", country: "Ukraine"},
            followed: false
        }
    ]
}
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SET-USERS"


const usersReducer = (state: InitialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map((u) => u.id === action.userId ? {...u, followed: true} : u
                )
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map((u) => u.id === action.userId ? {...u, followed: false} : u
                )
            }
        case SETUSERS :
            return {...state , users:[...state.users, action.users]}

        default :
            return {...state}
    }
}


const followActionCreator = (userId: string)  => ({type: "FOLLOW", userId})
const unfollowActionCreator = (userId: string)  => ({type: "UNFOLLOW" , userId})
const setUsersActionCreator = (users:InitialStateType) => ({type: "SET-USERS" , users})

export default usersReducer