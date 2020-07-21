import React from "react";
import PropTypes from "prop-types";
import './Sidenav.css';
import Menu from "../Icon/Menu.svg";
import User from "../Icon/User.svg";
import Pie from "../Icon/Pie.svg";
import {Link} from "react-router-dom";

export default function Sidenav(props) {
    const {open, onClose} = props;
    return (
        <div id="mySidenav" className="sidenav" style={{width: open ? '224px' : '0'}}>
            <div className="sidebar">
                <button onClick={onClose}>
                    <img className={"btn-img"} alt={"menu"} src={Menu}/>
                    <span>Proceset</span>
                </button>
            </div>
            <div className="sidebar" onClick={onClose}>
                <Link to="/account">
                    <button>
                        <img className={"btn-img"} alt={"menu"} src={User}/>
                        <span>Акаунт</span>
                    </button>
                </Link>

            </div>
            <div className="sidebar" onClick={onClose}>
                <Link to="/dashboard">
                    <button>
                        <img className={"btn-img"} alt={"menu"} src={Pie}/>
                        <span>Список процессов</span>
                    </button>
                </Link>
            </div>
            <div className="sidebar" onClick={onClose}>
                <Link to="/sign-in">
                    <button>
                        <img className={"btn-img"} alt={"menu"} src={Pie}/>
                        <span>Войти</span>
                    </button>
                </Link>
            </div>
        </div>
    )
}

Sidenav.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func
    // type: PropTypes.string,
    // value: PropTypes.string,
    // error: PropTypes.bool,
    // disabled: PropTypes.bool,
    // label: PropTypes.string,
    // placeholder: PropTypes.string,
    // helperText: PropTypes.string,

};

Sidenav.defaultProps = {
    type: "text",
    placeholder: "Не задано"
};
