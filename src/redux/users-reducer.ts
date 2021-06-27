

export type InitialStateType = {
    users:Array<UserType>


}

export type UserType = {
    id: number
    name: string
    status: string
    photos: { small: string, large: string }
    followed: boolean

}
type followAT = {
    type: "FOLLOW"
    userId: number
}
type unfollowAT = {
    type: "UNFOLLOW"
    userId: number
}
type setUsersAT = {
    type: "SET-USERS"
    users: Array<UserType>
}
type ActionTypes = followAT | unfollowAT | setUsersAT
let initialState = {
    users: []


}
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SETUSERS = "SET-USERS"


const usersReducer = (state = initialState, action: ActionTypes): InitialStateType => {
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
            return {...state, users: [...action.users]}

        default :
            return state
    }
}


export const followActionCreator = (userId: number) => ({type: "FOLLOW", userId})
export const unfollowActionCreator = (userId: number) => ({type: "UNFOLLOW", userId})
export const setUsersActionCreator = (users: Array<UserType>) => ({type: "SET-USERS", users})

export default usersReducer