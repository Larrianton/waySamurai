import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from "../Users/users.module.css"
type UsersPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UserType>) => void
    users: Array<UserType>
}

const Users = (props: UsersPropsType) => {
    return <div>
        {/*{*/}
        {/*    props.users.map(u => <div key={u.id}>*/}
        {/*        <div><img src={u.img} className={s.userPhoto}/></div>*/}
        {/*        <div>*/}
        {/*            {u.fullname}*/}
        {/*        </div>*/}
        {/*        <div>{u.location.city} {u.location.country}</div>*/}
        {/*        <div>*/}
        {/*            {u.followed ? <button onClick={(e) => props.unfollow(u.id)}>UnFollow</button> :*/}
        {/*                <button onClick={(e) => props.follow(u.id)}>Follow</button>}*/}
        {/*        </div>*/}
        {/*        <div>{u.status}</div>*/}
        {/*    </div>)*/}

        {/*}*/}
    </div>
}
