import React from 'react';
import PropTypes from 'prop-types';

// arrow functions, devuelve si return por no usar {}
// si usasemos {} tendriamos que hacer return de eso html
const Header = ({ onClickAdd}) => (
    <div className="header-content">
        <div className="header-title-text" >Mis videos favoritos</div>
        <input type="button" value="Añadir Video" onClick={onClickAdd} className="header-button-add"/>
    </div>
);

Header.propTypes = {
    onClickAdd: PropTypes.func.isRequired
}

export default Header;