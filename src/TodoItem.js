import React from 'react'

const TodoItem = ({item, deleteItem}) => {
    return (
        <li key={item.id}>
            {item.id} - {item.description}
            <button type={"button"} className={"btn btn-danger"} onClick={() => deleteItem(item.id)}>x</button>
        </li>
    )
}

export default TodoItem