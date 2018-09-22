import React, { Component } from 'react';
import './AddPost.css';
import './AddPost.css';

export default class AddPost extends Component {
    render() {
        return (
            <form className="container">
                <div>
                    <label >
                        Title
                    </label>
                    <input type="text"/>

                </div>
                <div>
                    <label>
                        Content
                    </label>
                    <input type="text" />

                </div>
                <div>
                    <label>
                        Author
                    </label>
                    <select>
                        <option selected value="Sara">Sara</option>
                        <option value="Iman">Iman</option>
                        <option value="Hajar">Hajar</option>
                    </select>

                </div>
                <button className="button">Add Post</button>
            </form>
        )
    }
}
