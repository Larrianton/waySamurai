import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from "./Users.module.css"
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    followingInProgress: Array<number>
    followingSuccess: (userId: number) => void
    unfollowingSuccess: (userId: number) => void
}


export const Users: React.FC<UsersPropsType> = ({
                                                    users,
                                                    totalUsersCount,
                                                    pageSize,
                                                    currentPage,
                                                    onPageChanged,
                                                    followingInProgress,
                                                    followingSuccess,
                                                    unfollowingSuccess,
                                                }) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= 30; i++) {
        pages.push(i)
    }

    return <div>

        {pages.map(p => {
            return <span className={currentPage === p ? s.selectedPage : ""}
                         onClick={(e) => onPageChanged(p)}>{p}</span>
        })}

        {users.map(u => <div key={u.id}>
            <NavLink to={`/profile/${u.id}`}>
                <img className={s.userPhoto} src={"https://avt-29.foto.mail.ru/mail/broonson/_avatar180?"}/>
            </NavLink>
            <div>
                {u.name}
            </div>
            <div>{"u.location.city"} {"u.location.country"}</div>
            <div>
                {u.followed ? <button disabled={followingInProgress.some((id) => id === u.id)}
                                      onClick={(e) => {
                                          unfollowingSuccess(u.id)
                                      }}>UnFollow</button> :
                    <button disabled={followingInProgress.some((id) => id === u.id)}
                            onClick={(e) => {
                                followingSuccess(u.id)
                            }}>Follow</button>}
            </div>
            <div>{u.status}</div>
        </div>)

        }

    </div>

}
