import React from "react";
import {connect} from "react-redux";

import {
    followActionCreator, setCurrentPageActionCreator, setTotalUsersCountAC,
    setUsersActionCreator,
    unfollowActionCreator, UserType,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./UsersC";


export type mapStateToPropsType = {
   users:Array<UserType>
    pageSize:number
    totalUsersCount:number
    currentPage:number
}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page:number) => void
    setTotalUsersCount: (totalUsersCount:number) => void

}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

    return {
        users: state.usersPage.users ,
        pageSize:state.usersPage.pagesSize ,
        totalUsersCount: state.usersPage.totalUsersCount ,
        currentPage: state.usersPage.currentPage ,
    }
}
const mapDispatchToProps = (dispatch: any): mapDispatchToPropsType => {
    return {
        follow: (userId:number) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowActionCreator(userId))

        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersActionCreator(users))

        },
        setCurrentPage : (page: number) => {
            dispatch(setCurrentPageActionCreator(page))

        },
         setTotalUsersCount : (page: number) => {
            dispatch(setTotalUsersCountAC(page))

        },

    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)