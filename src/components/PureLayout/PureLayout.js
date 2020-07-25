import React from "react";
import PropTypes from 'prop-types';
import './PureLayout.css';

export default function PureLayout(props) {
    const {children} = props;
    return (
        <div className="fullPureWrapper">
            {children}
        </div>
    )
}

PureLayout.propTypes = {
    children: PropTypes.node
};
