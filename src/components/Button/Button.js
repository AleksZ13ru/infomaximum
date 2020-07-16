import React from "react";
import PropTypes from "prop-types";
import './Button.css';

export default function Button(props) {
    const {text, disabled, onClick} = props;
    // const classes = useStyles();
    return (
        <button className="Button" disabled={disabled} onClick={onClick}>{text}</button>
    )
}

Button.propTypes ={
    text: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
};
