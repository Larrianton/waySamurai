import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from "../Users/users.module.css"
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    followingInProgress: boolean
    setIsFollowingProgress: (followingInProgress: boolean) => void
}
type subscribeUsersApiType = {
    resultCode: number
}

export const Users: React.FC<UsersPropsType> = ({
                                                    follow,
                                                    unfollow,
                                                    users,
                                                    totalUsersCount,
                                                    pageSize,
                                                    currentPage,
                                                    onPageChanged,
                                                    followingInProgress,
                                                    setIsFollowingProgress
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
                {u.followed ? <button disabled={followingInProgress} onClick={(e) => {
                        setIsFollowingProgress(true)
                        axios.delete<subscribeUsersApiType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                            {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "50ce9562-504b-455c-9d4f-2670455fd5d4"
                                }
                            })
                            .then((res) => {
                                if (res.data.resultCode === 0) {
                                    unfollow(u.id)
                                }
                                setIsFollowingProgress(false)
                            })

                    }}>UnFollow</button> :
                    <button disabled={followingInProgress} onClick={(e) => {
                        setIsFollowingProgress(true)
                        axios.post<subscribeUsersApiType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                            {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "50ce9562-504b-455c-9d4f-2670455fd5d4"
                                }
                            })
                            .then((res) => {
                                if (res.data.resultCode === 0) {
                                    follow(u.id)
                                }
                                setIsFollowingProgress(false)
                            })
                    }}>Follow</button>}
            </div>
            <div>{u.status}</div>
        </div>)

        }

    </div>

}
