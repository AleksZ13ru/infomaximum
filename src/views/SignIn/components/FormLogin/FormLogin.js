import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from "../../../../components/TextField";
import Button from "../../../../components/Button";
import {validate} from "./formValidate";

function FormLogin(props) {
    const {handleSubmit, reset, error, pristine, submitting} = props;
    return (
        <form onSubmit={handleSubmit} autoComplete={"off"}>
            <Field name="email" component={TextField} type="email" label="Электронная почта"/>
            <Field name="password" component={TextField} type="password" label="Пароль"/>
            <Button type="submit" text={"Войти в систему"} disabled={false}/>
            <a style={{margin: "8px"}} href="/sign-up">Зарегистрироваться</a>
        </form>
    )
}

export default reduxForm({
    form: 'login',
    validate
})(FormLogin);
