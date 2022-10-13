import React from 'react'
import classes from "./Message.module.css"

type MessagePropsType={
    avatar: string
    name: string
    message: string
    time: string
}


function Message({avatar,name, message,time}: MessagePropsType) {
    const image: HTMLImageElement = new Image()
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div className={classes.avatarContainer}>
                    <img className={classes.avatar} src={avatar}></img>
                </div>
                <div className={classes.align}>
                    <div className={classes.cornerContainer}>
                        <div className={classes.cornerInside}></div>
                        <div className={classes.cornerOutside}></div>
                    </div>

                    <div className={classes.container}>
                        <div className={classes.innerAlign}>
                            <div className={classes.name}>{name}</div>
                            <div className={classes.messageText}>{message}</div>
                        </div>
                        <div className={classes.timeContainer}>
                            <span className={classes.time}>{time}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
