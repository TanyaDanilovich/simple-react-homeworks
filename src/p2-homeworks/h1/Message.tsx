import React from 'react'
import classes from './Message.module.css'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message({avatar, name, message, time}: MessagePropsType) {

    return (
        <div className={classes.wrapper}>
            <div className={classes.avatarContainer}>
                <img alt="avatar" className={classes.avatar} src={avatar}></img>
            </div>

            <div className={classes.corner}></div>

            <div className={classes.content}>
                <div className={classes.name}>{name}</div>
                <div className={classes.messageText}>{message}</div>
                <div className={classes.time}>{time}</div>
            </div>

        </div>
    )
}

export default Message
