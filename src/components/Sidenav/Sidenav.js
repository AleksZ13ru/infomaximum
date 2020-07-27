import React from "react";
import PropTypes from "prop-types";
import './Sidenav.css';
import Menu from "../Icon/Menu.svg";
import User from "../Icon/User.svg";
import Pie from "../Icon/Pie.svg";
import Exit from "../Icon/Exit.svg";
import {Link} from "react-router-dom";
import {AUTH_TOKEN} from "../../constants";
import {useHistory} from "react-router-dom";

export default function Sidenav(props) {
    const {open, onClose} = props;
    const authToken = localStorage.getItem(AUTH_TOKEN);
    let history = useHistory();
    return (
        <div id="mySidenav" className="sidenav" style={{width: open ? '224px' : '0'}}>
            <div className="sidebar">
                <button onClick={onClose}>
                    <img className={"btn-img"} alt={"menu"} src={Menu}/>
                    <span>Proceset</span>
                </button>
            </div>
            <hr className="sidebarTop"/>
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
            <hr className="sidebar"/>
            <div className="sidebar" onClick={onClose}>
                {authToken ? (
                    <Link to="#" onClick={() => {
                        localStorage.removeItem(AUTH_TOKEN);
                        history.push(`/`)
                    }}>
                        <button>
                            <img className={"btn-img"} alt={"menu"} src={Exit}/>
                            <span>Выйти</span>
                        </button>
                    </Link>
                ) : (
                    <Link to="/sign-in" >
                        <button>
                            <img className={"btn-img"} alt={"menu"} src={Exit}/>
                            <span>Войти</span>
                        </button>
                    </Link>
                )}
            </div>
        </div>
    )
}

Sidenav.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func
};

Sidenav.defaultProps = {
    type: "text",
    placeholder: "Не задано"
};
