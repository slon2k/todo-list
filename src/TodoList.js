import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({items, deleteItem, toggleItemStatus}) => {
    const todoItems = items.map((item) => {
        return (
           <TodoItem key={item.id}
                     item = {item}
                     toggleItemStatus = {toggleItemStatus}
                     deleteItem={deleteItem} />
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