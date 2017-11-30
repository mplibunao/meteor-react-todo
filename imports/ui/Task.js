import React, { Component } from 'react';

// Task component - represents a single todo item
export default class Task extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log('this.props.task: ', this.props.task);
        return (
            <li>{this.props.task.text}</li>
        );
    }
}