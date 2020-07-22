import React from "react";
import PropTypes from "prop-types";
import './Button.css';

export default function Button(props) {
    const {text, disabled, onClick, onSubmit} = props;
    return (
        <div className="wrapper">
            <button className="button" disabled={disabled} onClick={onClick} onSubmit={onSubmit}>{text}</button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func
};
