import React from "react";
import {InitialStateType, UserType} from "../../redux/users-reducer";
import s from "../Users/users.module.css" ;
import axios from "axios";
import {mapDispatchToPropsType, mapStateToPropsType} from "./UsersContainer";


// type UsersPropsType = {
//     follow: (userId: string) => void
//     unfollow: (userId: string) => void
//     setUsers: (users: Array<UserType>) => void
//     users: Array<UserType>
// }
export type UsersPagePropsType = mapStateToPropsType & mapDispatchToPropsType
export type ItemsApiType = {
    items : Array<UserType>
    totalCount:number
    error:string
}


 export class Users extends React.Component <UsersPagePropsType> {
    componentDidMount() {

    axios.get<ItemsApiType>("https://social-network.samuraijs.com/api/1.0/users").then( res => {
        this.props.setUsers(res.data.items) ;
}) }

    render() {
        return <div>
        {
            this.props.users.map(u => <div key={u.id}>
                <div><img  className={s.userPhoto}/></div>
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