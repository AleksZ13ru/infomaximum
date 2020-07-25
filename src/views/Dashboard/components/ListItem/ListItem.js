import React from "react";
import './ListItem.css';
import {Col, Container, Row} from "react-grid-system";
import Item from "../Item";
import Branch from "../../../../components/Icon/Branch.svg"
import Timer from "../../../../components/Icon/Timer.svg";
import Users from "../../../../components/Icon/Users.svg";
import Reload from "../../../../components/Icon/Reload.svg";
import Clock from "../../../../components/Icon/Clock.svg";
import PropTypes from "prop-types";
import * as moment from 'moment'

function deltaT(ms) {
    let m = moment.duration(ms).asMinutes();
    let h = Math.trunc(m / 60);
    let mm = Math.trunc(m - h * 60);
    let hh = h > 0 ? `${h} час` : '';
    let mmm = mm > 0 ? ` ${mm} мин` : '';
    return hh + mmm
}

export default function ListItem(props) {
    const {element} = props;
    // +name
    // +numberOfExecutions
    // +-averageLeadTime
    // +-averageActiveTime
    // +employeesInvolvedProcess
    // +numberOfScenarios
    // +start
    // +end
    // +loading

    let moment = require('moment');
    require('moment/locale/ru');

    return (
        <div style={{margin: '18px'}}>
            <Container className={"paper"}>
                <Row>
                    <Col sm={10} className={"titleName"} style={{marginTop: "auto", marginBottom: "auto"}}>
                        <Row justify="start" style={{marginLeft: "15px"}}>
                            <span>{element.name}</span>
                        </Row>
                    </Col>
                    <Col sm={2} className={"buttonDetails"} style={{marginTop: "auto", marginBottom: "auto"}}>
                        <Row justify="end" style={{marginRight: "15px"}}>
                            <a href="#">На карту процесса ></a>
                        </Row>
                    </Col>
                </Row>
                <hr className="solid"/>
                <Row style={{minHeight: '192px'}}>
                    <Col sm={2} md={2} style={{marginTop: "auto", marginBottom: "auto"}}>
                        <Row justify="center">
                            <Item icon={Reload} text={`${element.numberOfExecutions}`} subtext={"выполнено раз"}/>
                        </Row>
                    </Col>
                    <Col sm={3} md={3} style={{marginTop: "24px", marginBottom: "auto"}}>
                        <Row style={{margin: "16px"}}>
                            <Item icon={Clock} text={deltaT(element.averageLeadTime)}
                                  subtext={"Среднее время выполнения"}/>
                        </Row>
                        <Row style={{margin: "16px"}}>
                            <Item icon={Timer} text={deltaT(element.averageActiveTime)}
                                  subtext={"Среднее активное время"}/>
                        </Row>
                    </Col>
                    <Col sm={3} md={3} style={{marginTop: "24px", marginBottom: "auto"}}>
                        <Row style={{margin: "16px"}}>
                            <Item icon={Users} text={`${element.employeesInvolvedProcess} сотрудников`}
                                  subtext={"участвуют в процессе"}/>
                        </Row>
                        <Row style={{margin: "16px"}}>
                            <Item icon={Branch} text={`${element.numberOfScenarios} сценариев`} subtext={"в процессе"}/>
                        </Row>
                    </Col>
                    <Col sm={3} md={3} style={{marginTop: "auto", marginBottom: "auto"}} className={"dates"}>
                        <Row style={{margin: "12px"}}>
                            <Col sm={5}><span className={"sub"}>Начало</span></Col>
                            <Col sm={7}><span
                                className={"dat"}>{moment.unix(element.start).format('DD MMMM YYYY')}</span></Col>
                        </Row>
                        <Row style={{margin: "12px"}}>
                            <Col sm={5}><span className={"sub"}>Окончание</span></Col>
                            <Col sm={7}><span
                                className={"dat"}>{moment.unix(element.end).format('DD MMMM YYYY')}</span></Col>
                        </Row>
                        <Row style={{margin: "12px"}}>
                            <Col sm={5}><span className={"sub"}>Загрузка</span></Col>
                            <Col sm={7}><span
                                className={"dat"}>{moment.unix(element.loading).format('DD MMMM YYYY')}</span></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

ListItem.propTypes = {
    element: PropTypes.object
};
