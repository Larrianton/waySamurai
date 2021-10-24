import {applyMiddleware, combineReducers, createStore} from "redux";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    dialogsPage:dialogsReducer ,
    profilePage: profileReducer,
    sideBar : sidebarReducer,
    usersPage : usersReducer,
    authPage:authReducer,
    form:formReducer
})
export let store = createStore(rootReducer , applyMiddleware(thunkMiddleware))
// @ts-ignore
window.store = store


