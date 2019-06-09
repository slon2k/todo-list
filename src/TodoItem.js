import React from 'react'
import './TodoItem.css'

const TodoItem = ({item, deleteItem, toggleItemStatus}) => {
    const labelClass = item.done ? 'todo-item__label todo-item__label--done' : 'todo-item__label'
    return (
        <li key={item.id}>
            <label className={labelClass} >
                <input  type="checkbox"
                        checked={item.done}
                        onChange={() => toggleItemStatus(item.id)}/>
                {item.description}
            </label>
            <button type={"button"} className={"btn btn-outline-danger btn-sm"} onClick={() => deleteItem(item.id)}>Delete</button>
        </li>
    )
}

export default TodoItem