import React, {Fragment} from "react";
import PropTypes from "prop-types";
import './SignIn.css';
import logo from '../../logo1.svg';
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import Danger from "../../components/Icon/Danger.svg";
import {gql, useMutation} from '@apollo/client';
import {AUTH_TOKEN} from '../../constants'
import {useHistory} from "react-router-dom";

const LOGIN_MUTTION = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

export default function SignIn() {
    // const [addTodo, { data }] = useMutation(ADD_TODO);
    let history = useHistory();
    const [email, setEmail] = React.useState("admin@admin.ru");
    const [emailError, setEmailError] = React.useState(false);
    const [password, setPassword] = React.useState("123456");
    const [passwordError, setPasswordError] = React.useState(false);
    const [errorServer, SetErrorServer] = React.useState(false);
    const [login, {data, loading, error}] = useMutation(LOGIN_MUTTION, {onCompleted, onError});
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error :(</p>;

    function validate(email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return reg.test(email);
    }

    const _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    };

    function onCompleted(data) {
        console.log(data.login.token);
        _saveUserData(data.login.token);
        history.push('/');
    }

    function onError() {
        SetErrorServer(true)
    }


    const handleSubmit = () => {
        SetErrorServer(false);
        // setEmailError(!validate(email));
        // setPasswordError(password.length === 0);
        // if (emailError || passwordError) return;

        login({
            variables: {
                email: email,
                password: password
            },
        }).then()
    };

    return (
        <Fragment>
            <div className="logo">
                <img
                    src={logo}
                    // className="App-logo"
                    alt="logo"/>
            </div>
            <div className="form">
                <TextField value={email} placeholder={"Электронная почта"}
                           onChange={(event) => setEmail(event.target.value)}/>
                <TextField value={password} placeholder={"Пароль"} type="password"
                           onChange={(event) => setPassword(event.target.value)}/>
                <Button type="submit" text={"Войти в систему"} onClick={handleSubmit}/>
                <a style={{margin: "8px"}} href="/sign-up">Зарегистрироваться</a>

                {errorServer &&
                <div className="error">
                    <div className="mess">
                        <img className={"btn-img"} alt={"menu"} src={Danger}/>
                        <span>Сообщение об ошибке!</span>
                    </div>
                </div>}
            </div>

        </Fragment>

        // <div>
        //     <form action="">
        //         <TextField value={name} onChange={(event)=>setName(event.target.value)}/>
        //         <TextField type="password"  value={pass} onChange={(event)=>setPass(event.target.value)}/>
        //         <Button type="submit" text={"Войти в систему"} onClick={()=>console.log(name+ ' '+ pass)}/>
        //     </form>
        // </div>
    );

}

SignIn.propTypes = {};