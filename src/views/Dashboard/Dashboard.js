import React, {Fragment} from "react";
import "./Dashboard.css";
import {gql, useQuery} from "@apollo/client";
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

const GET_PROCESS_LIST = gql`
    query processList{
        processList{
            id
            name
            numberOfExecutions
            averageLeadTime
            averageActiveTime
            employeesInvolvedProcess
            numberOfScenarios
            start
            end
            loading

        }
    }
`;

export default function Dashboard() {
    const {loading, error, data} = useQuery(GET_PROCESS_LIST);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            {data.processList.map((el) => (
                <Fragment key={el.id}>
                    <ListItem  element={el}/>
                </Fragment>

                )
            )}
            {/*{ console.log(data)}*/}
            {/* <ListItem/>*/}
            {/* <ListItem/>*/}
            {/* <ListItem/>*/}
            {/* <ListItem/>*/}
            {/* <ListItem/>*/}
            {/* <ListItem/>*/}
        </div>
    )
}

Dashboard.propTypes = {};
