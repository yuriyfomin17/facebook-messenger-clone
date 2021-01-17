import './App.css';
import React, {useState} from "react";

//input field
// send message button
// messages themselves
function App() {
    const [input, setInput] = useState('')
    return (
        <div className="App">
            <h1>Hello world</h1>
            <input value={input} onChange={e=>setInput(e.target.value)}/>
            <button> Send the message</button>
        </div>
    );
}

export default App;
