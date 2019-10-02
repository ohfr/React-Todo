// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './Todo.css';

export default class TodoList extends React.Component {
    render() {
        return (
            <div>
                <TodoForm addItem={this.props.addItem} deleteItem={this.props.deleteItem} />
                {this.props.items.map((cur, i) => {
                    return <Todo toggleItem={this.props.toggleItem} item={cur.task} id={cur.id} key={i} completed={cur.completed} />
                })}
            </div>
        )
    }
}