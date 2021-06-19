import {ActionTypes, sideBarType} from "./store";
import {v1} from "uuid";


let initialState: sideBarType = {
    friendsData: [
        {
            id: v1(),
            name: "Katya",
            image: "https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"
        },
        {
            id: v1(),
            name: "Sveta",
            image: "https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"
        },
        {
            id: v1(),
            name: "Dmitriy",
            image: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
        }
    ]

}

export const sidebarReducer = (state: sideBarType = initialState, action: ActionTypes) => {
    return state
}