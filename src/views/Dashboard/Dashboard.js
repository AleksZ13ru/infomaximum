import React, {Fragment} from "react";
import "./Dashboard.css";
import {gql, useQuery} from "@apollo/client";
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
                        <ListItem element={el}/>
                    </Fragment>
                )
            )}
        </div>
    )
}

Dashboard.propTypes = {};
