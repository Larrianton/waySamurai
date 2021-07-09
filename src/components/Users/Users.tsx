import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from "../Users/users.module.css"
type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: Array<UserType>
    totalUsersCount:number
    pageSize:number
    currentPage:number
    onPageChanged: (p:number) => void
    children: React.ReactNode

}

export const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i=1;  i <= pagesCount ; i ++) {
        pages.push(i)
    return <div>

        {pages.map(p => {
            return   <span className={props.currentPage === p ? s.selectedPage : ""}
                           onClick={(e)=>props.onPageChanged(p)}>{p}</span>
        })}

        { props.users.map(u => <div key={u.id}>
            <div><img className={s.userPhoto}/></div>
            <div>
                {u.name}
            </div>
            <div>{"u.location.city"} {"u.location.country"}</div>
            <div>
                {u.followed ? <button onClick={(e) => props.unfollow(u.id)}>UnFollow</button> :
                    <button onClick={(e) => props.follow(u.id)}>Follow</button>}
            </div>
            <div>{u.status}</div>
        </div>)

        }
    </div>
}
}
