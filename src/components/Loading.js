import React, { Component } from 'react';
import PropTypes from 'prop-types';

// primer paso: crear clase
// segundo paso: importar el componente
class Loading extends Component {
    render(){
        return (<div className="loading">{this.props.message || 'Cargando ...'}</div>);
    }
}

Loading.protoTypes = {
    message: PropTypes.string.isRequired
}

export default Loading;

