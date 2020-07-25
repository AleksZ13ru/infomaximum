export const validate = values => {
    const errors = {};
    if (!values.firstName){
        errors.firstName = 'Произошла ошибка. Поле должно быть заполнено'
    }
    if (!values.secondName){
        errors.secondName = 'Произошла ошибка. Поле должно быть заполнено'
    }
    if (!values.email) {
        errors.email = 'Произошла ошибка. Поле должно быть заполнено'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Произошла ошибка'
    }
    if (!values.password){
        errors.password = 'Произошла ошибка. Поле должно быть заполнено'
    }
    if (!values.passwordTwo){
        errors.passwordTwo = 'Произошла ошибка. Поле должно быть заполнено'
    }
    if (values.password!==values.passwordTwo){
        errors.password = 'Произошла ошибка. Пароли не совпадают';
        errors.passwordTwo = 'Произошла ошибка. Пароли не совпадают';
    }
    return errors
};
