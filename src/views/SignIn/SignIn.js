import React, {Fragment} from 'react';
import FormLogin from "./components/FormLogin";
import logo from "../../logo1.svg";
import './SignIn.css';
import {gql, useMutation} from "@apollo/client";
import {AUTH_TOKEN} from "../../constants";
import {useHistory} from "react-router-dom";
import Danger from "../../components/Icon/Danger.svg";

const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

function SignIn() {
    const [login] = useMutation(LOGIN_MUTATION, {onCompleted, onError});
    let history = useHistory();
    const [errorServer, setErrorServer] = React.useState({active: false, text: ''});

    const _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    };

    function onCompleted(data) {
        // console.log(data);
        _saveUserData(data.login.token);
        history.push('/');
    }

    function onError(error) {
        // console.log(error.message);
        localStorage.removeItem(AUTH_TOKEN);
        setErrorServer({active: true, text: error.message})
    }

    const handleSubmit = (values) => {
        console.log(values);
        setErrorServer({active: false, text: ''});
        login({
            variables: values,
        }).then(() => {
        })
    };

    return (
        <Fragment>
            <div className="logoFormIn">
                <img
                    src={logo}
                    alt="logo"/>
            </div>
            <div className="formSignIn">
                <FormLogin onSubmit={handleSubmit}/>
                {errorServer.active && <div className="errorServer">
                    <div className="mess">
                        <img className={"btn-img"} alt={"menu"} src={Danger}/>
                        <span>{errorServer.text}</span>
                    </div>
                </div>}
            </div>
        </Fragment>
    )
}

export default SignIn
