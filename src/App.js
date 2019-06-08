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
        ]
    }

    render() {
        return (
            <React.Fragment>
                <Header name={"ToDo List"}/>
                <main>
                    <div className={'container'}>
                        <Input/>
                        <TodoList/>
                        <Filter/>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
