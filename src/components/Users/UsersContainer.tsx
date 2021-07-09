import React from "react";
import {connect} from "react-redux";
import {
    followActionCreator, setCurrentPageActionCreator, setTotalUsersCountAC,
    setUsersActionCreator,
    unfollowActionCreator, UserType,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import axios from "axios";
import {Users} from "./Users";



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
export type UsersPagePropsType = mapStateToPropsType & mapDispatchToPropsType
export type ItemsApiType = {
    items: Array<UserType>
    totalCount: number
}


export class UsersContainer extends React.Component <UsersPagePropsType> {
    componentDidMount() {

        axios.get<ItemsApiType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.setTotalUsersCount}`).then(res => {
            this.props.setUsers(res.data.items);
            this.props.setTotalUsersCount(res.data.totalCount);
        })
    }

    onPageChanged = (p: number) => {
        this.props.setCurrentPage(p)
        axios.get<ItemsApiType>(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.setTotalUsersCount}`).then(res => {
            this.props.setUsers(res.data.items);

        })
    }

    render() {
        return   (
        <Users         users={this.props.users}
                      pageSize={this.props.pageSize}
                      totalUsersCount={this.props.totalUsersCount}
                      currentPage={this.props.currentPage}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      onPageChanged={this.onPageChanged}
        />
        )

    }
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
 connect(mapStateToProps, mapDispatchToProps)(Users)