import React, {Fragment} from "react";
import PropTypes from "prop-types";
import logo from "../../logo1.svg";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import './SignUp.css';

export default function SignUp() {
    const [firstName, setFirstName] = React.useState('');
    const [secondName, setSecondName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordTwo, setPasswordTwo] = React.useState('');
    const [firstNameError, setFirstNameError] = React.useState(false);
    const [secondNameError, setSecondNameError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [passwordError, setPasswordError] = React.useState(false);

    function validate(email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return reg.test(email);
    }

    const handleSubmit = () => {
        // SetErrorServer(false);
        setFirstNameError(firstName.length === 0);
        setSecondNameError(secondName.length === 0);
        setEmailError(!validate(email));
        setPasswordError(password.length === 0 || password!==passwordTwo);
        if (!validate(email) || password.length === 0) return;

        // login({
        //     variables: {
        //         email: email,
        //         password: password
        //     },
        // }).then()
    };

    return (
        <Fragment>
            <div className="logoSignUp">
                <img src={logo} alt="logo"/>
            </div>
            <div className="formSignUp">
                <span>Регистрация</span>
                <TextField
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder={"Имя"}
                    error={firstNameError}
                />
                <TextField
                    value={secondName}
                    onChange={(event) => setSecondName(event.target.value)}
                    placeholder={"Фамилия"}
                    error={secondNameError}
                />
                <TextField
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={"Электронная почта"}
                    error={emailError}
                />
                <TextField
                    type="password"
                    value={password} onChange={(event) => setPassword(event.target.value)}
                    placeholder={"Введите пароль"}
                    error={passwordError}
                />
                <TextField
                    type="password"
                    value={passwordTwo}
                    onChange={(event) => setPasswordTwo(event.target.value)}
                    placeholder={"Повторите пароль"}
                    error={passwordError}
                />
                <Button type="submit" text={"Применить и войти"} onClick={handleSubmit}/>
                <p style={{margin: "8px"}}>Уже зарегистрированы? <a href="/sign-in">Войти</a></p>
            </div>
        </Fragment>
    );
}

SignUp.propTypes = {};
