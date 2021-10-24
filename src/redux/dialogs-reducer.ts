import {v1} from "uuid";
import {dialogsDataType, messagesDataType} from "./store";


export const sendMessageActionCreator = (message: string) => ({type: SEND_MESSAGE, message } as const)

const SEND_MESSAGE = "SEND-MESSAGE"


let initialState = {
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
}
type DialogsReducerType =
    | sendMessageBodyActionType


export type sendMessageBodyActionType = ReturnType<typeof sendMessageActionCreator>

export const dialogsReducer = (state: InitialStateType = initialState, action: DialogsReducerType): InitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE :
            let newMessage = {
                id: v1(),
                message:action.message
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage],
            }
        default:
            return {...state}
    }


}

//Types
type InitialStateType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
}
