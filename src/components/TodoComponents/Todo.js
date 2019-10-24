import React from 'react';

export default class Todo extends React.Component {
    render() {
        return (
            <div onClick={(e) => this.props.toggleItem(e, this.props.id)}>
                <h2 className={this.props.completed ? "completed" : null}>{this.props.item} </h2>
            </div>
        )
    }
}