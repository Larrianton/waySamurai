export type InitialStateType = {
    users: Array<UserType>
    pagesSize: number
    totalUsersCount: number
    currentPage: number
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
    type: "SET_USERS"
    users: Array<UserType>
}
type setCurrentPageAT = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}
type setTotalUsersAT = {
    type: "SET_TOTAL_USERS_COUNT"
    totalUsersCount: number
}


type ActionTypes = followAT | unfollowAT | setUsersAT | setCurrentPageAT | setTotalUsersAT
let initialState = {
    users: [],
    pagesSize: 1000,
    totalUsersCount: 0,
    currentPage: 1,
}
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"


const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
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
        case SET_USERS :
            return {...state, users: action.users}
        case SET_CURRENT_PAGE :
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT :
            return {...state, totalUsersCount: action.totalUsersCount}

        default :
            return state
    }
}


export const followActionCreator = (userId: number) => ({type: "FOLLOW", userId})
export const unfollowActionCreator = (userId: number) => ({type: "UNFOLLOW", userId})
export const setUsersActionCreator = (users: Array<UserType>) => ({type: "SET_USERS", users})
export const setCurrentPageActionCreator = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage})
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount})

export default usersReducer