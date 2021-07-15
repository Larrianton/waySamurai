import {v1} from "uuid";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

export type postType = {
    id: string
    likes: number
    img: string
    message: string
}
export type profilePageType = {
    postsData: Array<postType>
    newPostText: string
}
export type dialogsDataType = {
    id: string
    name: string
    image: string
}
export type messagesDataType = {
    id: string
    message: string
}
export type dialogsPageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    newMessageText: string
}
export type rootStateType = {
    dialogsPage: dialogsPageType
    profilePage: profilePageType
    sideBar: sideBarType

}
export type friendsDataType = {
    id: string
    name: string
    image: string
}
export type sideBarType = {
    friendsData: Array<friendsDataType>

}
 type storeType = {
    _state: rootStateType
    subscribe: (callback: () => void) => void
    _rerenderEntireTree: () => void
    getState: () => rootStateType
    dispatch: (action: ActionTypes) => void
}
export type changePostTextActionType = {
    type: "CHANGE-POST-TEXT"
    newText: string
}
export type addPostActionType = {
    type: "ADD-POST"
}
export type newMessageBodyActionType = {
    type: "NEW-MESSAGE-BODY"
    body: string
}
export type sendMessageBodyActionType = {
    type: "SEND-MESSAGE"
}
export type ActionTypes =
    changePostTextActionType
    | addPostActionType
    | newMessageBodyActionType
    | sendMessageBodyActionType

const store: storeType = {
    _state: {
        dialogsPage: {
            newMessageText: "",
            dialogsData: [
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
                    name: "Valery",
                    image: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
                },
                {
                    id: v1(),
                    name: "Alexander",
                    image: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
                },
                {
                    id: v1(),
                    name: "Dmitriy",
                    image: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
                }
            ],
            messagesData: [
                {id: v1(), message: "Hello what is your name ?"},
                {id: v1(), message: "how are you"},
                {id: v1(), message: "Relax take it easy!"},
                {id: v1(), message: "yo Man!"},
                {id: v1(), message: "Hey chicks!"}
            ]
        },
        profilePage: {
            newPostText: "",
            postsData: [
                {
                    id: v1(),
                    likes: 15,
                    img: "https://aw.mail.ru/ms/02dc975224518acc56b7e1e9e73d40ec.png",
                    message: 'Hi ,im learning Js'
                },
                {
                    id: v1(),
                    likes: 12,
                    img: "https://aw.mail.ru/ms/02dc975224518acc56b7e1e9e73d40ec.png",
                    message: 'How are you?'
                }
            ]
        },
        sideBar: {
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
    },
    subscribe(callback: () => void) {
        this._rerenderEntireTree = callback
    },
    _rerenderEntireTree() {
        console.log("state is changed")
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionTypes) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._rerenderEntireTree()

    }

}


export default store;

