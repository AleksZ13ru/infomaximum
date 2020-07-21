import React from "react";
import PropTypes from "prop-types";
import './TopBar.css';
import Menu from "../Icon/Menu.svg";

export default function TopBar(props) {
    const {onClick} = props;
    return (
        <div className="topbar">
            <button onClick={onClick}>
                <img className={"btn-img"} alt={"menu"} src={Menu}/>
                <span>Меню</span>
            </button>
            {/*<button onClick={onClick}><img alt={"menu"} src={Menu}/>Меню</button>*/}
        </div>
    )
}

TopBar.propTypes = {
    // type: PropTypes.string,
    // value: PropTypes.string,
    // error: PropTypes.bool,
    // disabled: PropTypes.bool,
    // label: PropTypes.string,
    // placeholder: PropTypes.string,
    // helperText: PropTypes.string,
    onClick: PropTypes.func
};

TopBar.defaultProps = {
    type: "text",
    placeholder: "Не задано"
};
