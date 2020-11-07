import React from 'react';

// arrow functions, devuelve si return por no usar {}
// si usasemos {} tendriamos que hacer return de eso html
const Header = ({name}) => (
    <div className="header-content">
        <div className="header-title-text" >Los favoritos de {name}</div>
        <input type="button" value="Añadir Video" className="header-button-add"/>
    </div>
);

export default Header;