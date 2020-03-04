import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useState, useEffect } from 'react'
import io from 'socket.io-client';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

let socket;
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
    socket = io("http://localhost:3001");
   useEffect(() => {
    socket.emit('join', message);

   });
    useEffect(() => {
        socket.on('chat-join', data => {
           if(data === null){
            addResponseMessage("Welcome")
           } else{
               addResponseMessage(`${data}`)
           }
        });
    }, [message]);
    const handleNewUserMessage = (newMessage) =>{
        setMessage(newMessage);
        }
    return (
        <div >
           <Widget handleNewUserMessage={handleNewUserMessage} /> 
        </div>
    )
}

export default Chat