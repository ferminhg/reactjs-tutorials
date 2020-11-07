import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typed from 'typed.js';

// primer paso: crear clase
// segundo paso: importar el componente
class Loading extends PureComponent {
    componentDidMount() {
        const speed = this.props.speed || 90;
        this.typed = new Typed(this.$loading, {
          strings: [this.props.message],
          typeSpeed: parseInt(speed)
        });
    }
    componentWillUnmount() {
        this.typed.destroy();
    }
    render() {
        return (<div className="loader" ref={el => this.$loading = el} ></div>);
    }
}

Loading.protoTypes = {
    message: PropTypes.string.isRequired
}

export default Loading;

