import './App.css';
import React, {useState} from "react";

//input field
// send message button
// messages themselves
function App() {
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState(['hi', 'take dog out'])
    console.log(input)
    console.log(messages)
    const sendMessage = (event) => {
        // all the logic to send a message goes here
        event.preventDefault()

        if(!!input){
            setMessages([...messages, input])
            setInput('')
        }

    }
    return <div className="App">
        <h1>Hello world</h1>
        <form>
            <input value={input} onChange={e => setInput(e.target.value)}/>
            <button type='submit' onClick={sendMessage}> Send the message</button>
        </form>

        {
            messages.map(message => (
                <p key={message}>{message}</p>
            ))
        }
    </div>;
}

export default App;
