import React from 'react';
import ProtoTypes from 'prop-types';

const Item = ({data}) => (
    <div className="grid-item" >
        <img className="preview-image" src={data.thumbnail} alt={data.title}/>
        <div className="preview-title">{data.title}</div>
    </div>
);

Item.prototype = {
    data: ProtoTypes.object.isRequired
}

export default Item;