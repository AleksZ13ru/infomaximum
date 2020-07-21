import React from "react";
import './Dashboard.css';
// import PropTypes from "prop-types";
// import {Col, Container, Row} from "react-grid-system";
// import Button from "../../components/Button/Button";
// import TextField from "../../components/TextField/TextField";
// import Item from "./components/Item";
// import Branch from "../../components/Icon/Branch.svg";
// import Timer from "../../components/Icon/Timer.svg";
// import Users from "../../components/Icon/Users.svg";
// import Reload from "../../components/Icon/Reload.svg";
// import Clock from "../../components/Icon/Clock.svg";
import ListItem from "./components/ListItem";

export default function Dashboard() {
    return(
        <div>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
            <ListItem/>
        </div>
    )
}

Dashboard.propTypes = {};
