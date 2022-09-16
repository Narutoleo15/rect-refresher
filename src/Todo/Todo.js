import { React, useState, useRef } from 'react';
import './Todo.css';

export default function Todo() {
    const input = useRef();
    const buttonId = useRef();
    const [state, setState] = useState([
        { name: "hello", id: `hello${Math.random() * 5}` },
        { name: "goodbye", id: `goodbye${Math.random() * 5}` }
    ])
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = input.current.value;
        setState(prevState => [...prevState, { name: value, id: `${value}-${Math.random() * 5}` }]);
        input.current.value = "";
    }

    const removeItem = (event) => {
        const newState = state.filter(item => item.id !== event.target.value)
        setState(newState)
    }

    const list = state.map(item => {
        return (
            <li key={item.id}>
                <p>{item.name}</p>
                <button ref={buttonId} onClick={(e) => removeItem(e)} value={item.id}>X</button>
            </li>
        )
    })
    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <button type='submit'>Add Item</button>
            </form>
            <section>
                <ul>
                    {list}
                </ul>
            </section>
        </section>
    )
}
