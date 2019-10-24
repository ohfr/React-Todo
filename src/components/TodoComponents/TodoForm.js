import React from 'react';


export default class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            value: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        
        this.props.addItem(e, this.state.value)
        console.log(this.state.value)
        this.setState({
            value: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button type="submit">Add Item</button>
                <button onClick={this.props.deleteItem}> Clear Completed</button>
            </form>
        )
    }
}