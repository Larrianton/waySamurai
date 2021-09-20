import {usersApi} from "../api/api";
import {Dispatch} from "redux";

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
type setIsFollowingProgressAT = {
    type: "SET_IS_FOLLOWING_PROGRESS"
    isFetching: boolean
    userId: number
}


type ActionTypes = followAT |
    unfollowAT |
    setUsersAT |
    setCurrentPageAT |
    setTotalUsersAT |
    setIsFetchingAT |
    setIsFollowingProgressAT
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_IS_FOLLOWING_PROGRESS = "SET_IS_FOLLOWING_PROGRESS"

type InitialStateType = {
    users: Array<UserType>
    pagesSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
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
    followingInProgress: [],
}

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
        case SET_IS_FOLLOWING_PROGRESS :
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }

        default :
            return state
    }
}


export const follow = (userId: number): followAT => ({type: "FOLLOW", userId})
export const unfollow = (userId: number): unfollowAT => ({type: "UNFOLLOW", userId})
export const setUsers = (users: Array<UserType>): setUsersAT => ({type: "SET_USERS", users})
export const setCurrentPage = (currentPage: number): setCurrentPageAT => ({type: "SET_CURRENT_PAGE", currentPage})
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersAT => ({
    type: "SET_TOTAL_USERS_COUNT",
    totalUsersCount
})
export const setIsFetching = (isFetching: boolean): setIsFetchingAT => ({type: "SET_IS_FETCHING", isFetching})
export const setIsFollowingProgress = (isFetching: boolean, userId: number): setIsFollowingProgressAT => ({
    type: "SET_IS_FOLLOWING_PROGRESS",
    isFetching,
    userId
})

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        dispatch(setIsFetching(true))
        usersApi.getUsersList(currentPage, pageSize).then((res) => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(res.items))
            dispatch(setTotalUsersCount(res.totalCount))
        })
    }
}

export const pageChange = (p: number, currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        dispatch(setCurrentPage(p))
        dispatch(setIsFetching(true))
        usersApi.getNextPageUsersList(currentPage, pageSize).then(res => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(res.items));
        })
    }
}
export const followingSuccess = (userId: number) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        dispatch(setIsFollowingProgress(true, userId))
        usersApi.followingUser(userId)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(setIsFollowingProgress(false, userId))
            })
    }
}
export const unfollowingSuccess = (userId: number) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        dispatch(setIsFollowingProgress(true, userId))
        usersApi.unfollowingUser(userId)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(setIsFollowingProgress(false, userId))
            })
    }
}

