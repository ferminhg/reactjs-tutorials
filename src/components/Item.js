import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class Item extends Component{
    render(){
        const { id, image, name } = this.props.data;
        return (<Link className="grid-item-link" to={`/${id}`}>
            <div className="grid-item" >
                <img className="preview-image" src={image} alt={name}/>
                <div className="preview-title">{name}</div>
            </div>
        </Link>);
    }
}

Item.propTypes = {
    data: PropTypes.object.isRequired
};

export default Item;