import React from "react";
import './ListItem.css';
import {Col, Container, Row} from "react-grid-system";
import Item from "../Item";
import Branch from "../../../../components/Icon/Branch.svg"
import Timer from "../../../../components/Icon/Timer.svg";
import Users from "../../../../components/Icon/Users.svg";
import Reload from "../../../../components/Icon/Reload.svg";
import Clock from "../../../../components/Icon/Clock.svg";

export default function ListItem() {
    return <div style={{margin: '18px'}}>
        <Container className={"paper"}>
            <Row>
                <Col sm={10} className={"titleName"} style={{marginTop: "auto", marginBottom: "auto"}}>
                    <Row justify="start" style={{marginLeft:"15px"}}>
                        <span>Рассмотрение кредитной заявки</span>
                    </Row>
                </Col>
                <Col sm={2} className={"buttonDetails"} style={{marginTop: "auto", marginBottom: "auto"}}>
                    {/*<span>На карту процесса ></span>*/}
                    <Row justify="end" style={{marginRight:"15px"}}>
                        <a href="#" >На карту процесса ></a>
                    </Row>
                </Col>
            </Row>
            <hr className="solid"/>
            <Row style={{minHeight: '192px'}}>
                <Col sm={2} md={2} style={{marginTop: "auto", marginBottom: "auto"}}>
                    <Row justify="center">
                        <Item icon={Reload} text={"340487"} subtext={"выполнено раз"}/>
                    </Row>
                </Col>
                <Col sm={3} md={3} style={{marginTop: "24px", marginBottom: "auto"}}>
                    <Row style={{margin: "16px"}}>
                        <Item icon={Clock} text={"10ч 36 мин"} subtext={"Среднее время выполнения"}/>
                        {/*<h3>10ч 36 мин</h3>*/}
                    </Row>
                    <Row style={{margin: "16px"}}>
                        <Item icon={Timer} text={"1ч 7 ми"} subtext={"Среднее активное время"}/>
                        {/*<h3>1ч 7 мин</h3>*/}
                    </Row>
                </Col>
                <Col sm={3} md={3} style={{marginTop: "24px", marginBottom: "auto"}}>
                    <Row style={{margin: "16px"}}>
                        <Item icon={Users} text={"120 сотрудников"} subtext={"участвуют в процессе"}/>
                        {/*<h3>120 сотрудников</h3>*/}
                    </Row>
                    <Row style={{margin: "16px"}}>
                        <Item icon={Branch} text={"129 сценариев"} subtext={"в процессе"}/>
                        {/*<h3>129 сценариев</h3>*/}
                    </Row>
                </Col>
                <Col sm={3} md={3} style={{marginTop: "auto", marginBottom: "auto"}} className={"dates"}>
                    <Row style={{margin: "12px"}}>
                        <Col sm={5}><span className={"sub"}>Начало</span></Col>
                        <Col sm={7}><span className={"dat"}>11 ноября 2017</span></Col>
                    </Row>
                    <Row style={{margin: "12px"}}>
                        <Col sm={5}><span className={"sub"}>Окончание</span></Col>
                        <Col sm={7}><span className={"dat"}>6 января 2018</span></Col>
                    </Row>
                    <Row style={{margin: "12px"}}>
                        <Col sm={5}><span className={"sub"}>Загрузка</span></Col>
                        <Col sm={7}><span className={"dat"}>10 января 2018</span></Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    </div>;
}

ListItem.propTypes = {};
