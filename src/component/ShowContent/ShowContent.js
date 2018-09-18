import React, { Component } from 'react';
import './ShowContent.css';

export default class ShowContent extends Component {
    render() {
        return (
            <div className= "container">
                <p>Title  </p>
                <p>Content </p>
                <button className = "deleteButton">Delete</button>
            </div>
        )
    }
}
