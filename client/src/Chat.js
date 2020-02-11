import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useState, useEffect } from 'react'
import io from 'socket.io-client';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const useStyles = makeStyles(theme => ({
    root: {
      position: 'fixed',
      bottom: 50,
      right : 50,
      padding: '15px',
      backgroundColor: "white"

    },
}))

const Chat = () => {
    const classes = useStyles();
    const [message , setMessage] = useState();
    useEffect(() => {
        // let socket = io.connect("http://localhost:3001");
        
        // console.log(socket)
        // socket.on('chat-message', data => {
        //     addUserMessage(data)
        // } )
        // socket.emit('send-chat-message', message)
      
    }, [message]);
    const handleNewUserMessage =(newMessage) =>{
        setMessage(newMessage);
    }
    return (
        <div >
           <Widget handleNewUserMessage={handleNewUserMessage} /> 
        </div>
    )
}

export default Chat