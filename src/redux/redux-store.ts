import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import usersReducer from "./users-reducer";

export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sidebarReducer ,
    usersPage:usersReducer
})
 let store = createStore(rootReducer)
//@ts-ignore
window.store = store

export default store
