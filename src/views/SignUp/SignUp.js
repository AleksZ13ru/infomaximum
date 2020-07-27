import React, {Fragment} from 'react';
import FormLogin from "./components/FormSignUp";
import logo from "../../logo1.svg";
import './SignUp.css';
import {gql, useMutation} from "@apollo/client";
import {AUTH_TOKEN} from "../../constants";
import {useHistory} from "react-router-dom";
import Danger from "../../components/Icon/Danger.svg";

const SIGNUP_MUTATION = gql`
    mutation signUp($firstName: String! , $secondName: String!, $email: String!, $password: String!){
        signup(firstName:$firstName, secondName:$secondName, email:$email, password:$password)
    }
`;

function SignUp() {
    const [signup] = useMutation(SIGNUP_MUTATION, {onCompleted, onError});
    let history = useHistory();
    const [errorServer, setErrorServer] = React.useState({active: false, text: ''});

    const _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    };

    function onCompleted(data) {
        // console.log(data);
        // _saveUserData(data.signup);
        localStorage.setItem(AUTH_TOKEN, data.signup);
        history.push('/');
    }

    function onError(error) {
        // console.log(error.message);
        localStorage.removeItem(AUTH_TOKEN);
        setErrorServer({active: true, text: error.message})
    }

    const handleSubmit = (values) => {
        console.log(values);
        signup({
            variables: values,
        }).then()
    };

    return (
        <Fragment>
            <div className="logoFormIn">
                <img
                    src={logo}
                    alt="logo"/>
            </div>
            <div className="formSignUp">
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

export default SignUp
