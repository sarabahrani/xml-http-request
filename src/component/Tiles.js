import React from 'react';
import Tile from './Tile'

export default (props) => {
    return (
        <div>
            <Tile {...props.children} />
            <Tile {...props.children} />
            <Tile {...props.children} />
        </div>
    )
}
