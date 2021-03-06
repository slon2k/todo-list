import React from 'react';
import './App.css';
import Header from './Header'
import Input from './Input'
import TodoList from './TodoList'
import Filter from './Filter'


export default class App extends React.Component {

    state = {
        todoItems: [
            {id: 1, description: "Do first", done: true},
            {id: 2, description: "Do second", done: false},
            {id: 3, description: "Do third", done: false},
        ],
        count: 4,
        filter: 'all'
    }

    filteredItems() {
        const {filter, todoItems} = this.state;
        if (filter === 'done') {
            return todoItems.filter((item) => item.done === true)
        }
        if (filter === 'active') {
            return todoItems.filter((item) => item.done === false)
        }
        return todoItems;
    }

    setFilter = (filter) => {
        this.setState({filter: filter})
    }

    toggleItemStatus = (id) => {
        const {todoItems} = this.state;
        const index = todoItems.findIndex((item) => item.id === id);
        if (index > -1) {
            todoItems[index].done = !todoItems[index].done;
            this.setState({todoItems: todoItems});
        }
    }

    addItem = (description) => {
        const {todoItems, count} = this.state;
        const newItem = {id: count, description: description, done: false}
        todoItems.push(newItem);
        this.setState({count: count + 1, todoItems: todoItems});
    }

    deleteItem = (id) => {
        const {todoItems} = this.state;
        const newList = todoItems.filter((item) => item.id !== id);
        this.setState({todoItems: newList});
    }

    render() {
        return (
            <React.Fragment>
                <Header name={"ToDo List"}/>
                <main>
                    <div className={'container'}>
                        <Input addItem={this.addItem}/>
                        <TodoList items={this.filteredItems()}
                                  deleteItem={this.deleteItem}
                                  toggleItemStatus={this.toggleItemStatus}
                        />
                        <Filter setFilter={this.setFilter}
                                filter={this.state.filter}/>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
