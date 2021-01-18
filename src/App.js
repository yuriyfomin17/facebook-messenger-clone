import './App.css';
import React, {useEffect, useState} from "react";
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import Message from "./Message";
import db from './Firebase'
import firebase from "firebase";
import FlipMove from "react-flip-move";
import image from './facebook-image.png'


//input field
// send message button
// messages themselves
function App() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])
    const [username, setUsername] = useState('')

    // useState = variable in React
    // useEffect = run code on a condition in React. During second render

    useEffect(() => {
        // run once when the app loads
        // when database data changes (hence name Snapshot) the listener
        // useEffect runs
        // However, db is also listener so it will run when snapshot of database
        // changes
        db.collection('messages')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
            })
    }, [])

    useEffect(() => {
        // run code here...
        // if it is blank inside [], this code runs once when the app component is loads
        // if we have variable like "input". it will rerender every time when input changes
        setUsername(prompt('Please enter your name'))
    }, [])// condition

    const sendMessage = (event) => {
        // all the logic to send a message goes here
        event.preventDefault()
        db.collection('messages').add({
            message: input,
            username: username,
            // user timestamp where the server is
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')

    }

    return <div className="App">
        <img src={image} height={100} width={100} />
        <h1>Hello world</h1>
        <h1>{username}</h1>
        <form>
            <FormControl>
                <InputLabel htmlFor="my-input">Enter Message</InputLabel>
                <Input aria-describedby="my-helper-text" value={input} onChange={e => setInput(e.target.value)}/>
                <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send
                    the message</Button>
            </FormControl>

        </form>

        <FlipMove>
            {
                messages.map(({id, message}) => (
                    <Message key={id} username={username} message={message}/>
                ))
            }
        </FlipMove>

    </div>;
}

export default App;
