import {UserType} from "../redux/users-reducer";
import axios from "axios";

type ItemsApiUsersType = {
    items: Array<UserType>
    totalCount: number
}
type subscribeUsersApiType = {
    resultCode: number
}
const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "50ce9562-504b-455c-9d4f-2670455fd5d4"
    }
})


export const usersApi = {
    getNextPageUsersList(p: number, pageSize: number) {
        return instance.get<ItemsApiUsersType>(`/users?page=${p}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    },
    getUsersList(currentPage: number, pageSize: number) {
        return instance.get<ItemsApiUsersType>
        (`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    },
    followingUser(userId: number) {
     return   instance.post<subscribeUsersApiType>(`/follow/${userId}`)
    } ,
    unfollowingUser(userId: number) {
     return   instance.delete<subscribeUsersApiType>(`/follow/${userId}`)

    }



}
