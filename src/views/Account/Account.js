import React, {Fragment} from "react";
import "./Account.css"
import {gql, useMutation, useQuery} from "@apollo/client";
// import PropTypes from "prop-types";
// import TopBar from "../../components/TopBar";
// import Menu from "../../components/Icon/Menu.svg";
// import Sidenav from "../../components/Sidenav";
import Button from "../../components/Button";
import {Container, Row, Col} from 'react-grid-system';
import TextField from "../../components/TextField";
import "./Account.css"

const GET_CURENT_USER = gql`
    query currentUser{
        currentUser{
            id
            firstName
            secondName
            email
        }
    }
`;

const USER_EDIT_MUTATION = gql`
    mutation editUser($Id:Int!, $firstName: String! , $secondName: String!, $email: String!, $password: String!){
        editUser(id:$Id, firstName:$firstName, secondName:$secondName, email:$email, password:$password){
            id
            firstName
            secondName
            email
        }
    }
`;

export default function Account() {
    const [id, setId] = React.useState(null);
    const [firstName, setFirstName] = React.useState('');
    const [secondName, setSecondName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordTwo, setPasswordTwo] = React.useState('');
    const [firstNameError, setFirstNameError] = React.useState(false);
    const [secondNameError, setSecondNameError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);

    const {loading: queryLoading, error: queryError, data, refetch} = useQuery(GET_CURENT_USER, {
        onCompleted, onError
    });
    const [userEdit, {loading: mutationLoading, error: mutationError}] = useMutation(USER_EDIT_MUTATION, {
        // onCompleted, onError
        onCompleted: onCompletedMutation, onError: onErrorMutation
    });

    function onCompleted(data) {
        setId(data.currentUser.id);
        setFirstName(data.currentUser.firstName);
        setSecondName(data.currentUser.secondName);
        setEmail(data.currentUser.email);
    }

    function onError() {

    }

    function onCompletedMutation(data) {
        refetch();
    }

    function onErrorMutation() {
        console.log(mutationError)
    }

    function validate(email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return reg.test(email);
    }

    const handleSubmit = () => {
        setFirstNameError(firstName.length === 0);
        setSecondNameError(secondName.length === 0);
        setEmailError(!validate(email));
        setPasswordError(password.length === 0 || password !== passwordTwo);
        if (firstName.length === 0 || secondName.length === 0 || !validate(email) || password.length === 0) return;
        userEdit({
            variables: {
                Id: id,
                firstName: firstName,
                secondName: secondName,
                email: email,
                password: "123456"
            },
            //     {
            //     id:id,
            //     firstName:firstName,
            //     secondName:secondName,
            //     email:email,
            //     password:password
            //
            // },
        }).then()
    };

    if (queryLoading) return 'Loading...';
    if (queryError) return `Error! ${queryError.message}`;
    // const [openSidebar, setOpenSidebar] = React.useState(false);
    return (
        <div>
            <Container style={{marginTop: "18px", marginBottom: "18px"}}>
                <Row justify="between" debug>
                    <Col className={"accountName"}>
                        <div>
                            <span>{data.currentUser.firstName} {data.currentUser.secondName}. Редактирование</span>
                        </div>
                    </Col>
                    <Col xs="content" className={"accountBtnSave"}>
                        <div>
                            <Button text={"Сохранить"} onClick={handleSubmit}/>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className={"accountPaper"} style={{paddingLeft: "24px"}}>
                <Row className={"accountRow"}>
                    <Col sm={6} md={3}>
                        <h3>Имя</h3>
                    </Col>
                    <Col sm={6} md={4}>
                        <TextField value={firstName}
                                   onChange={(event) => setFirstName(event.target.value)}
                                   error={firstNameError}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} md={3}>
                        <h3>Фамилия</h3>
                    </Col>
                    <Col sm={6} md={4}>
                        <TextField
                            value={secondName}
                            onChange={(event) => setSecondName(event.target.value)}
                            error={secondNameError}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} md={3}>
                        <h3>Электронная почта</h3>
                    </Col>
                    <Col sm={6} md={4}>
                        <TextField
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            error={emailError}
                        />
                    </Col>

                </Row>
                <Row>
                    <Col sm={6} md={3}>
                        <h3>Новый пароль</h3>
                    </Col>
                    <Col sm={6} md={4}>
                        <TextField
                            type={"password"} value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            error={passwordError}
                        />
                    </Col>

                </Row>
                <Row>
                    <Col sm={6} md={3}>
                        <h3>Повторить пароль</h3>
                    </Col>
                    <Col sm={6} md={4}>
                        <TextField
                            type={"password"} value={passwordTwo}
                            onChange={(event) => setPasswordTwo(event.target.value)}
                            error={passwordError}
                        />
                    </Col>
                </Row>
            </Container>
            {/*<Container className={"paper"}>*/}
            {/*    <Row>*/}
            {/*        <Col sm={6} md={3}>*/}
            {/*            <h3>Фамилия</h3>*/}
            {/*        </Col>*/}
            {/*        <Col sm={6} md={4}>*/}
            {/*            <TextField/>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*    <Row>*/}
            {/*        <Col sm={6} md={3}>*/}
            {/*            <h3>Электронная почта</h3>*/}
            {/*        </Col>*/}
            {/*        <Col sm={6} md={4}>*/}
            {/*            <TextField/>*/}
            {/*        </Col>*/}

            {/*    </Row>*/}
            {/*    <Row>*/}
            {/*        <Col sm={6} md={3}>*/}
            {/*            <h3>Новый пароль</h3>*/}
            {/*        </Col>*/}
            {/*        <Col sm={6} md={4}>*/}
            {/*            <TextField type={"password"}/>*/}
            {/*        </Col>*/}

            {/*    </Row>*/}
            {/*    <Row>*/}
            {/*        <Col sm={6} md={3}>*/}
            {/*            <h3>Повторить пароль</h3>*/}
            {/*        </Col>*/}
            {/*        <Col sm={6} md={4}>*/}
            {/*            <TextField type={"password"}/>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</Container>*/}

        </div>


    )
}

Account.propTypes = {};
