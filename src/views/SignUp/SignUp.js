import React, {Fragment} from "react";
import PropTypes from "prop-types";
import logo from "../../logo1.svg";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import './SignUp.css';

export default function SignUp() {
    const [name, setName] = React.useState();
    const [pass, setPass] = React.useState();
    return (
        <Fragment>
            <div className="logo">
                <img
                    src={logo}
                    // className="App-logo"
                    alt="logo"/>
            </div>
            <div className="form">
                <h2>Регистрация</h2>
                <TextField value={name} onChange={(event) => setName(event.target.value)} placeholder={"Имя"} />
                <TextField value={name} onChange={(event) => setName(event.target.value)} placeholder={"Фамилия"} />
                <TextField value={name} onChange={(event) => setName(event.target.value)} placeholder={"Электронная почта"} />
                <TextField type="password" value={pass} onChange={(event) => setPass(event.target.value)} placeholder={"Введите пароль"}/>
                <TextField type="password" value={pass} onChange={(event) => setPass(event.target.value)}  placeholder={"Повторите пароль"}/>
                <Button type="submit" text={"Применить и войти"} onClick={() => console.log(name + ' ' + pass)}/>
                <p style={{margin: "8px"}}>Уже зарегистрированы? <a href="/sign-in">Войти</a></p>
            </div>
        </Fragment>
    );
}

SignUp.propTypes = {};
