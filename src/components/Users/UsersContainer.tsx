import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {
    followingSuccess,
    getUsers,
    pageChange,
    setIsFetching,
    setTotalUsersCount,
    unfollowingSuccess,
    UserType,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";

export type UsersPagePropsType = mapStateToPropsType & mapDispatchToPropsType

export type mapStateToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: Array<number>
    isFetching: boolean


}
export type mapDispatchToPropsType = {
    setTotalUsersCount: (totalUsersCount: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    pageChange: (p: number, currentPage: number, pageSize: number) => void
    followingSuccess: (userId: number) => void
    unfollowingSuccess: (userId: number) => void
}


export class UsersContainer extends React.Component <UsersPagePropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)


        // this.props.setIsFetching(true)
        // getUsersList(this.props.currentPage, this.props.pageSize).then(res => {
        //     this.props.setIsFetching(false)
        //     this.props.setUsers(res.items);
        //     this.props.setTotalUsersCount(res.totalCount);
        // })
    }


    onPageChanged = (p: number) => {
        this.props.pageChange(p, this.props.currentPage, this.props.pageSize)
        // this.props.setCurrentPage(p)
        // this.props.setIsFetching(true)
        // getNextPageUsersList(this.props.currentPage, this.props.pageSize).then(res => {
        //     this.props.setIsFetching(false)
        //     this.props.setUsers(res.items);
        // })
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
                    onPageChanged={this.onPageChanged}
                    followingInProgress={this.props.followingInProgress}
                    followingSuccess={this.props.followingSuccess}
                    unfollowingSuccess={this.props.unfollowingSuccess}
                />
            </>
        )

    }
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {

    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

// const mapDispatchToProps = (dispatch: any): mapDispatchToPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(follow(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollow(userId))
//
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsers(users))
//
//         },
//         setCurrentPage: (page: number) => {
//             dispatch(setCurrentPage(page))
//
//         },
//         setTotalUsersCount: (page: number) => {
//             dispatch(setTotalUsersCount(page))
//
//         },
//         setIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetching(isFetching))
//
//         },
//
//     }
// }

// export const UsersWithConnect = connect(mapStateToProps,
//     {
//         setIsFetching,
//         setTotalUsersCount,
//         pageChange,
//         followingSuccess,
//         unfollowingSuccess,
//         getUsers
//     })(UsersContainer)

export const UsersWithCompose = compose<ComponentType>(
    connect(mapStateToProps,
        {
            setIsFetching,
            setTotalUsersCount,
            pageChange,
            followingSuccess,
            unfollowingSuccess,
            getUsers
        }),
    WithAuthRedirect
)(UsersContainer)