import React from 'react';
import s from './../Dialogs.module.css'


type messageItemType = {
    message: string

}

export const MessageItem = (props: messageItemType) => {
    return <div className={s.message}>
        {props.message}
    </div>
}



