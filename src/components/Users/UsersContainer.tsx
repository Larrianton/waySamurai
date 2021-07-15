import React from "react";
import {connect} from "react-redux";
import {
    followActionCreator, setCurrentPageActionCreator, setIsFetchingAC, setTotalUsersCountAC,
    setUsersActionCreator,
    unfollowActionCreator, UserType,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";
import preloader from "../../assets/images/preloader.svg"
import {Preloader} from "../common/Preloader/Preloader";

export type UsersPagePropsType = mapStateToPropsType & mapDispatchToPropsType
export type ItemsApiType = {
    items: Array<UserType>
    totalCount: number
}

export class UsersContainer extends React.Component <UsersPagePropsType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get<ItemsApiType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setIsFetching(false)
            this.props.setUsers(res.data.items);
            this.props.setTotalUsersCount(res.data.totalCount);
        })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        this.props.setIsFetching(true)
        axios.get<ItemsApiType>(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(res => {
            this.props.setIsFetching(false)
            this.props.setUsers(res.data.items);

        })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    onPageChanged={this.onPageChanged}
                />
            </>
        )

    }
}

export type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}
export type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setIsFetching: (isFetching: boolean) => void

}
const mapDispatchToProps = (dispatch: any): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowActionCreator(userId))

        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersActionCreator(users))

        },
        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageActionCreator(page))

        },
        setTotalUsersCount: (page: number) => {
            dispatch(setTotalUsersCountAC(page))

        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))

        },

    }
}
export const UsersWithConnect = connect(mapStateToProps, mapDispatchToProps)(UsersContainer)