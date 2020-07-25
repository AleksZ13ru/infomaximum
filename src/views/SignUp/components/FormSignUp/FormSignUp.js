import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from "../../../../components/TextField";
import Button from "../../../../components/Button";
import {validate} from "./formValidate";

function FormSignUp(props) {
    const {handleSubmit, reset, error, pristine, submitting} = props;

    return (
        <form onSubmit={handleSubmit} autoComplete={"off"}>
            <Field name="firstName" component={TextField} type="text" label="Имя"/>
            <Field name="secondName" component={TextField} type="text" label="Фамилия"/>
            <Field name="email" component={TextField} type="email" label="Электронная почта"/>
            <Field name="password" component={TextField} type="password" label="Введите пароль"/>
            <Field name="passwordTwo" component={TextField} type="password" label="Повторите пароль"/>
            <Button type="submit" text={"Войти в систему"} disabled={false}/>
            <p style={{margin: "8px"}}>Уже зарегистрированы? <a href="/sign-in">Войти</a></p>
        </form>
    )
}

export default reduxForm({
    form: 'signUp',
    validate
})(FormSignUp);
