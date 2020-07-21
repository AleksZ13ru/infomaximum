import React from "react";
import PropTypes from "prop-types";
import './Button.css';

export default function Button(props) {
    const {type, text, disabled, onClick, onSubmit} = props;
    // const classes = useStyles();
    return (
        <div className="wrapper">
            <button className="Button" disabled={disabled} onClick={onClick} onSubmit={onSubmit}>{text}</button>
        </div>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func
};
