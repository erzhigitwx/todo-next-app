import React, { useState } from 'react'
import "../../styles/create.css"

const CreateTodo = ({ todos, setTodos }) => {
    const [value, setValue] = useState('')
    const clickHandler = function () {
        setTodos([...todos, {
            plane: value,
            done: false,
            id: Date.now()
        }])
        setValue("")
    }

    return (
        <div className="create">
            <input type="text" className='create-input' placeholder='your todo...' value={value} onChange={(e) => setValue(e.target.value)} />
            <button className="create-button" onClick={() => clickHandler()}>Create</button>
        </div>
    )
}

export default CreateTodo;