import {combineReducers, createStore} from "redux";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    dialogsPage:dialogsReducer ,
    profilePage: profileReducer,
    sideBar : sidebarReducer,
    usersPage : usersReducer
})
export let store = createStore(rootReducer)



