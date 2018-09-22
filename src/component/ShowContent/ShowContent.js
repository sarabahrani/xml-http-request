import React, { Component } from 'react';

export default class ShowContent extends Component {
    render() {
        return (
            <div className= "container">
                <p>Title  </p>
                <p>Content </p>
                <button className = "button">Delete</button>
            </div>
        )
    }
}
