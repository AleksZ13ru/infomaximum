import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from "../../../../components/TextField";
import Button from "../../../../components/Button";
import {Container, Row, Col} from 'react-grid-system';
import {validate} from "./formValidate";

function FormCurrentUser(props) {
    const {handleSubmit, reset, error, pristine, submitting, initialValues, saveBtnText} = props;
    return (
        <form onSubmit={handleSubmit} autoComplete={"off"}>
            <Container style={{marginTop: "18px", marginBottom: "18px"}}>
                <Row justify="between">
                    <Col className={"accountName"}>
                        <div>
                            <span>{initialValues.firstName} {initialValues.secondName}. Редактирование</span>
                        </div>
                    </Col>
                    <Col xs="content" className={"accountBtnSave"}>
                        <div>
                            <Button type="submit" text={saveBtnText} disabled={pristine || submitting}/>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className={"accountPaper"}>
                {/*<Container className={"accountPaper"} style={{paddingLeft: "24px"}}>*/}
                <Row justify="start" align="center">
                    <Col sm={6} md={3}>
                        <label>Имя</label>
                    </Col>
                    <Col sm={6} md={4}>
                        <Field name="firstName" component={TextField} type="text" label="Имя"/>
                    </Col>
                </Row>
                <Row justify="start" align="center">
                    <Col sm={6} md={3}>
                        <label>Фамилия</label>
                    </Col>
                    <Col sm={6} md={4}>
                        <Field name="secondName" component={TextField} type="text" label="Фамилия"/>
                    </Col>
                </Row>
                <Row justify="start" align="center">
                    <Col sm={6} md={3}>
                        <label>Электронная почта</label>
                    </Col>
                    <Col sm={6} md={4}>
                        <Field name="email" component={TextField} type="email" label="Электронная почта"/>
                    </Col>
                </Row>
                <Row justify="start" align="center">
                    <Col sm={6} md={3}>
                        <label>Введите пароль</label>
                    </Col>
                    <Col sm={6} md={4}>
                        <Field name="password" component={TextField} type="password" label="Введите пароль"/>
                    </Col>
                </Row>
                <Row justify="start" align="center">
                    <Col sm={6} md={3}>
                        <label>Повторите пароль</label>
                    </Col>
                    <Col sm={6} md={4}>
                        <Field name="passwordTwo" component={TextField} type="password" label="Повторите пароль"/>
                    </Col>
                </Row>
            </Container>
        </form>
    )
}

export default reduxForm({
    form: 'currentUser',
    validate,
    enableReinitialize:true
})(FormCurrentUser);
