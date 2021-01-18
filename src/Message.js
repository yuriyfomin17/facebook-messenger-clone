import React from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import './Message.css'

function Message(props) {
    const {message, username} = props
    const isUser = username === message.username
    return (
        <div className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser?'message_userCard':'message_guestCard'}>
                <div>
                    <CardContent>
                        <Typography
                            color="white"
                            component="h5"
                            variant="h5"
                        >
                            {message.username}:{message.message}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </div>


    );
}

export default Message;
