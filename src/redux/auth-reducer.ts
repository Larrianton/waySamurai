import {Dispatch} from "redux";
import {authApi} from "../api/api";

type SetIsFetchingAT = ReturnType<typeof setIsFetching>
export type SetAuthUserData = ReturnType<typeof setAuthUserData>


export type InitialAuthStateType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isFetching: boolean,
    isAuth:boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false

}
type ActionTypes = SetAuthUserData | SetIsFetchingAT


export const authReducer = (state: InitialAuthStateType= initialState, action: ActionTypes): InitialAuthStateType => {
    switch (action.type) {
        case "SET_AUTH_USER_DATA":
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login,
                isAuth: true

            }
        case "SET_IS_FETCHING" :
            return {...state, isFetching: action.isFetching}

        default :
            return state
    }
}


export const setIsFetching = (isFetching: boolean) => ({type: "SET_IS_FETCHING", isFetching} as const)
export const setAuthUserData = (email: string, id: string, login: string) => ({
    type: "SET_AUTH_USER_DATA",
    id,
    email,
    login
} as const)

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authApi.authMe()
        .then(res => {
            dispatch(setIsFetching(true))
            if (res.data.resultCode === 0) {
                let {email, id, login} = res.data.data
                dispatch(setAuthUserData(email, id, login))
                dispatch(setIsFetching(false))
            }
        })

}

