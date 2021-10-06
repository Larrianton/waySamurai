import {UserType} from "../redux/users-reducer";
import axios from "axios";
import {ProfileType} from "../redux/profile-reducer";

type ItemsApiUsersType = {
    items: Array<UserType>
    totalCount: number
}
type subscribeUsersApiType = {
    resultCode: number
}
type AuthApiType = {
    data: {
        id: string,
        login: string,
        email: string,
    }
    resultCode: number,
}


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "cf494fa6-50c4-47b4-b87c-61978a308635"
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
        return instance.post<subscribeUsersApiType>(`follow/${userId}`)
    },
    unfollowingUser(userId: number) {
        return instance.delete<subscribeUsersApiType>(`follow/${userId}`)

    },
    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`)
    }
}


export const authApi = {
    authMe() {
        return instance.get<AuthApiType>('/auth/me')

    }
}
