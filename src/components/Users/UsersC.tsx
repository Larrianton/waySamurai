import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from "../Users/users.module.css";
import axios from "axios";
import {mapDispatchToPropsType, mapStateToPropsType} from "./UsersContainer";


export type UsersPagePropsType = mapStateToPropsType &  mapDispatchToPropsType
export type ItemsApiType = {
    items: Array<UserType>
    totalCount:number
}


export class Users extends React.Component <UsersPagePropsType>  {
    componentDidMount() {

        axios.get<ItemsApiType>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.setTotalUsersCount}`).then(res => {
            this.props.setUsers(res.data.items);
            this.props.setTotalUsersCount(res.data.totalCount);
        })
    }
    onPageChanged = (p:number) => {
        this.props.setCurrentPage(p)
        axios.get<ItemsApiType>(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.setTotalUsersCount}`).then(res => {
            this.props.setUsers(res.data.items);

        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i=1;  i <= pagesCount ; i ++) {
            pages.push(i)
        }

        return <div>

                 {pages.map(p => {
                  return   <span className={this.props.currentPage === p ? s.selectedPage : ""}
                  onClick={(e)=>this.onPageChanged(p)}>{p}</span>
                 })}

            { this.props.users.map(u => <div key={u.id}>
                    <div><img className={s.userPhoto}/></div>
                    <div>
                        {u.name}
                    </div>
                    <div>{"u.location.city"} {"u.location.country"}</div>
                    <div>
                        {u.followed ? <button onClick={(e) => this.props.unfollow(u.id)}>UnFollow</button> :
                            <button onClick={(e) => this.props.follow(u.id)}>Follow</button>}
                    </div>
                    <div>{u.status}</div>
                </div>)

            }
        </div>
    }
}