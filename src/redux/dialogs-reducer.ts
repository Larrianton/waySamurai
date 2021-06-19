import {v1} from "uuid";
import {ActionTypes, dialogsPageType, newMessageBodyActionType, sendMessageBodyActionType} from "./store";


export const newMessageBodyActionCreator = (body: string): newMessageBodyActionType => ({type: new_message_body, body})
export const sendMessageActionCreator = (): sendMessageBodyActionType => ({type: send_message})

const new_message_body = "NEW-MESSAGE-BODY"
const send_message = "SEND-MESSAGE"


let initialState = {
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
}


const dialogsReducer = (state:dialogsPageType = initialState, action: ActionTypes)   => {
    switch (action.type) {
        case new_message_body :
            state.newMessageText = action.body
            return {...state}
        case send_message :
            let newMessage = {
                id: v1(),
                message: state.newMessageText
            };

            state.messagesData.push(newMessage)
            state.newMessageText=""
            console.log (state.newMessageText)
            return {...state}

        default:
            return {...state}
    }


}
export default dialogsReducer