import React from "react";
import PropTypes from "prop-types";
import './Item.css';


export default function Item(props) {
    const {icon, text, subtext} = props;
    // const classes = useStyles();
    return(
        <div>
            <div className="text">
                <img className={"btn-img"} alt={"menu"} src={icon}/>
                <span>{text}</span>
            </div>
            <div className="subtext">
                <span>{subtext}</span>
            </div>
        </div>
    )
}

Item.propTypes = {
    icon: PropTypes.object,
    text: PropTypes.string,
    subtext: PropTypes.string,
};
