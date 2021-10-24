import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./Dialog/DialogItem";
import {MessageItem} from "./MessageItem/MessageItem";
import {dialogsPageType} from "../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type dialogsType = {
    sendMessage: (message:string) => void
    dialogsPage:dialogsPageType
}
type FormDataType = {
    dialog:string
}

export const Dialogs = (props: dialogsType) => {

    let dialogElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}
                                                                                  image={d.image}/>);
    let messageElements = props.dialogsPage.messagesData.map(m => <MessageItem message={m.message}/>)

    const onSubmit = (formData:FormDataType) => {
        props.sendMessage(formData.dialog)

    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}

            </div>
            <div className={s.dialogsMessages}>
                {messageElements}

            </div>
           <DialogsReduxForm onSubmit={onSubmit}/>
        </div>

    )

}
export const DialogsForm:React.FC<InjectedFormProps<FormDataType> > = (props) => {
    debugger
    return (
            <div>
                <form onSubmit={props.handleSubmit}>
                <Field placeholder={"New Message Dialogs"} component="textarea" name="dialog"/>
                <button>Send Message</button>
                </form>
            </div>


    )

}
 const DialogsReduxForm  = reduxForm<FormDataType >({form: 'Dialogs'})(DialogsForm)