export const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Произошла ошибка. Поле должно быть заполнено'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Произошла ошибка'
    }
    if (!values.password){
        errors.password = 'Произошла ошибка. Поле должно быть заполнено'
    }
    return errors
};
