import React from 'react'

const TodoItem = ({item, deleteItem}) => {
    return (
        <li key={item.id}>
            {item.description}
            <button type={"button"} className={"btn btn-danger btn-sm"} onClick={() => deleteItem(item.id)}>Delete</button>
        </li>
    )
}

export default TodoItem