import React, {forwardRef} from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import './Message.css'
// forwardRef is example of Higher order function. Example only rerender new messages
// Like instagram. You don't want to rerender all messages
const Message = forwardRef(({message, username}, ref) => {
    const isUser = username === message.username
    return (
        <div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? 'message_userCard' : 'message_guestCard'}>
                <div>
                    <CardContent>
                        <Typography
                            color="initial"
                            component="h5"
                            variant="h5"
                        >
                            {!isUser &&`${message.username||`Unknown`}: `}{message.message}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </div>


    );
})

export default Message;
