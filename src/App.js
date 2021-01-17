import './App.css';
import React, {useState} from "react";
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import Message from "./Message";

//input field
// send message button
// messages themselves
function App() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState(['hi', 'take dog out'])
    const [username, setUsername] = useState('')

    // useState = variable in React
    // useEffect = run code on a condition in React. During second render

    const sendMessage = (event) => {
        // all the logic to send a message goes here
        event.preventDefault()


        setMessages([...messages, input])
        setInput('')

    }
    return <div className="App">
        <h1>Hello world</h1>
        <form>
            <FormControl>
                <InputLabel htmlFor="my-input">Enter Message</InputLabel>
                <Input aria-describedby="my-helper-text" value={input} onChange={e => setInput(e.target.value)}/>
                <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send
                    the message</Button>
            </FormControl>

        </form>


        {
            messages.map(message => (
                <Message message={message}/>
            ))
        }
    </div>;
}

export default App;
