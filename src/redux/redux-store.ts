import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type StoreType = typeof store

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sidebarReducer
})
 let store = createStore(reducers)

export default store
