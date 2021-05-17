import {v1} from "uuid";


export type postType = {
    id: string
    likes: number
    img:string
    message:string
}
export type profilePageType = {
    postsData:Array<postType>
}
export type dialogsDataType = {
    id: string
    name: string
    image:string
}
export type messagesDataType = {
    id:string
    message:string
}
export type dialogsPageType = {
    dialogsData:Array<dialogsDataType>
    messagesData:Array<messagesDataType>
}
export type rootStateType = {
    dialogsPage:dialogsPageType
    profilePage:profilePageType
    sideBar:sideBarType
}
export type navDataType = {
    id:string
    name:string
}
export type friendsDataType = {
    id: string
    name: string
    image:string
}
export type sideBarType = {
    friendsData:Array<friendsDataType>
   }
let state:rootStateType = {
    dialogsPage: {
        dialogsData: [
            {id: v1(), name: "Katya" , image:"https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"},
            {id: v1(), name: "Sveta" , image:"https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"},
            {id: v1(), name: "Valery" , image:"https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"},
            {id: v1(), name: "Alexander" , image:"https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"},
            {id: v1(), name: "Dmitriy" , image:"https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"}
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
        postsData:[
            {id: v1(),likes: 15,img: "https://aw.mail.ru/ms/02dc975224518acc56b7e1e9e73d40ec.png",message: 'Hi ,im learning Js'},
            {id: v1(),likes: 12,img: "https://aw.mail.ru/ms/02dc975224518acc56b7e1e9e73d40ec.png",message: 'How are you?'}
            ]
    },
    sideBar: {
  friendsData:[
{id: v1(), name: "Katya" , image:"https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"},
{id: v1(), name: "Sveta" , image:"https://i.pinimg.com/736x/4a/bc/c0/4abcc00427dbb86ee5da8270b52204f8.jpg"},
{id: v1(), name: "Dmitriy" , image:"https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"}
]

}
}

export default state