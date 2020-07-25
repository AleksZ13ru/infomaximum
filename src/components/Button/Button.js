import React from "react";
import PropTypes from "prop-types";
import './Button.css';

export default function Button(props) {
    const {text, type, disabled} = props;
    return (
        <div className="buttonWrapper">
            <button className="button" disabled={disabled} type={type}>{text}</button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,

};
