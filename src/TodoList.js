import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({items, deleteItem}) => {
    const todoItems = items.map((item) => {
        return (
           <TodoItem item = {item} deleteItem={deleteItem} />
        )
    })

    return (
        <div>
            <ol>
                {todoItems}
            </ol>
        </div>
    )
}

export default TodoList