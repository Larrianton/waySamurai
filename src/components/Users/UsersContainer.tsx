import React from "react";
import {connect} from "react-redux";

import {
    followActionCreator,
    setUsersActionCreator,
    unfollowActionCreator, UserType,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./UsersC";


export type mapStateToPropsType = {
   users:Array<UserType>

}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void

}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

    return {
        users: state.usersPage.users
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
    }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)