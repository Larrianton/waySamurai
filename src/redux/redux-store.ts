import {combineReducers, createStore} from "redux";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {authReducer} from "./auth-reducer";

export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    dialogsPage:dialogsReducer ,
    profilePage: profileReducer,
    sideBar : sidebarReducer,
    usersPage : usersReducer,
    authPage:authReducer,
})
export let store = createStore(rootReducer)
// @ts-ignore
window.store = store


