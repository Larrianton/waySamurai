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
type setIsFetchingAT = {
    type: "SET_IS_FETCHING"
    isFetching: boolean
}


type ActionTypes = followAT | unfollowAT | setUsersAT | setCurrentPageAT | setTotalUsersAT | setIsFetchingAT
type InitialStateType = {
    users: Array<UserType>
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    isFetching:boolean
}
export type UserType = {
    id: number
    name: string
    status: string
    photos: { small: string, large: string }
    followed: boolean

}
let initialState = {
    users: [],
    pagesSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
}
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_IS_FETCHING = "SET_IS_FETCHING"


export const usersReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
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
        case SET_IS_FETCHING :
            return {...state, isFetching: action.isFetching}

        default :
            return state
    }
}


export const follow = (userId: number) => ({type: "FOLLOW", userId})
export const unfollow = (userId: number) => ({type: "UNFOLLOW", userId})
export const setUsers = (users: Array<UserType>) => ({type: "SET_USERS", users})
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage})
export const setTotalUsersCount = (totalUsersCount: number) => ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount})
export const setIsFetching = (isFetching:boolean) => ({type: "SET_IS_FETCHING", isFetching})

