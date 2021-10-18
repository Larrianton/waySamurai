import {UserType} from "../redux/users-reducer";
import axios from "axios";
import {ProfileType} from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "5672a2e5-6f67-4cc0-9979-abdb3acc400d"
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

    }
}

export const profileApi = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getProfileStatus(userId:number) {
        return instance.get<string>(`/profile/status/${userId}`)
    } ,
    updateProfileStatus(status:string){
        return instance.put<UpdateProfileStatusApi>(`/profile/status/` , {status})
    }
}

export const authApi = {
    authMe() {
        return instance.get<AuthApiType>('/auth/me')

    }
}
//Types

type ItemsApiUsersType = {
    items: Array<UserType>
    totalCount: number
}
type subscribeUsersApiType = {
    resultCode: number
}
type AuthApiType = {
    data: {
        id: number
        login: string
        email: string
    }
    resultCode: number
}
type UpdateProfileStatusApi = {
    resultCode:number
    messages:[]
    data:{}
}