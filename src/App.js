import React from 'react';

import TodoList from './components/TodoComponents/TodoList';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      items: []
    }
  }

  addItem = (e, task) => {
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false

    }
    this.setState({
      items: [
        ...this.state.items,
        newItem
      ]
    })
  }
  
  deleteItem = (e) => {
    e.preventDefault();
    this.setState({
      items: this.state.items.filter(cur => {
        return !cur.completed
      })
    })
  }

  toggleItem = (e, id) => {
    this.setState({
      items: this.state.items.map(cur => {
        if (cur.id === id) {
          return {
            ...cur,
            completed: !cur.completed
          }
        } else {
          return cur;
        }
      })
    })
  }
  render() {

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList items={this.state.items} addItem={this.addItem} toggleItem={this.toggleItem} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default App;
