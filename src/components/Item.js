import React from 'react';
import ProtoTypes from 'prop-types';

const Item = ({data}) => (
    <div className="grid-item" >
        <img className="preview-image" src={data.image} alt={data.name}/>
        <div className="preview-title">{data.name}</div>
    </div>
);

Item.prototype = {
    data: ProtoTypes.object.isRequired
}

export default Item;