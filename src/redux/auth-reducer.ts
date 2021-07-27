type SetIsFetchingAT = {
    type: "SET_IS_FETCHING",
    isFetching: boolean,
}
type SetAuthUserDataAT = {
    type: "SET_AUTH_USER_DATA",
    id: string,
    email: string,
    login: string,
}


type InitialStateType = {
    id: string | null,
    email: string | null,
    login: string | null,
    isFetching: boolean,
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,

}
type ActionTypes = SetAuthUserDataAT | SetIsFetchingAT

const SET_IS_FETCHING = "SET_IS_FETCHING"
const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"


export const authReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA :
            return {
                ...state,
                id: action.id,
                email: action.email,
                login: action.login

            }
        case SET_IS_FETCHING :
            return {...state, isFetching: action.isFetching}

        default :
            return state
    }
}


export const setIsFetching = (isFetching: boolean) => ({type: SET_IS_FETCHING, isFetching})
export const setAuthUserData = (email: string, id: string, login: string) => ({
    type: SET_AUTH_USER_DATA,
    id,
    email,
    login
})

