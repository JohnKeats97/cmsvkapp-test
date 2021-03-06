import React from 'react'

import './style.css';


export default (props) => {

    return <button
        className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ButtonOk-root"
        style={props.config.style}
        onClick={props.onClick}
    >
        {props.config.text}
        <span className="components-RightPanel-BodyRight-WindowApp-BasketWindow-ButtonOk-price">
            {props.price} pуб
        </span>
    </button>
};
