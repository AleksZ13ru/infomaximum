import React, {Fragment} from "react";
import PropTypes from "prop-types";
import './Account.css';
import TopBar from "../../components/TopBar";
import Menu from "../../components/Icon/Menu.svg";
import Sidenav from "../../components/Sidenav";
import Button from "../../components/Button";
import {Container, Row, Col} from 'react-grid-system';
import TextField from "../../components/TextField";

export default function Account() {
    // const [openSidebar, setOpenSidebar] = React.useState(false);
    return (
        <div style={{margin: '18px'}}>
            <Container>
                <Row justify="between">
                    <Col className={"titleName"}>
                        <h2>Борис Годунов.Редактирование</h2>
                    </Col>
                    <Col xs="content" className={"buttonSave"}>
                        <Button text={"Сохранить"}/>
                    </Col>
                </Row>
                <Container className={"paper"} >
                    <Row className={"row"}>
                        <Col sm={6} md={3}>
                            <h3>Имя</h3>
                        </Col>
                        <Col sm={6} md={4}>
                            <TextField/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} md={3}>
                            <h3>Фамилия</h3>
                        </Col>
                        <Col sm={6} md={4}>
                            <TextField/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6} md={3}>
                            <h3>Электронная почта</h3>
                        </Col>
                        <Col sm={6} md={4}>
                            <TextField/>
                        </Col>

                    </Row>
                    <Row>
                        <Col sm={6} md={3}>
                            <h3>Новый пароль</h3>
                        </Col>
                        <Col sm={6} md={4}>
                            <TextField type={"password"}/>
                        </Col>

                    </Row>
                    <Row>
                        <Col sm={6} md={3}>
                            <h3>Повторить пароль</h3>
                        </Col>
                        <Col sm={6} md={4}>
                            <TextField type={"password"}/>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>


    )
}

Account.propTypes = {};
