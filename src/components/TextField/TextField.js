import React from "react";
import PropTypes from "prop-types";
import './TextField.css';
import EyeOpened from './Icon/svg/EyeOpened.svg'
import Icon from "./Icon";

export default function TextField(props) {
    const {type, value, disabled, label, error, helperText, onClick, placeholder, onChange} = props;
    const [passShow, setPassShow] = React.useState(false);
    let className = "textField";
    let errorText = "Произошла ошибка";
    if (error) {
        className+=" er";
        if (value==='') {
            errorText +=". Поле должно быть заполнено"
        }
    }


    return (
        <div className="wrapper">
            <div>{label}</div>
            <div className={className}>
                <input
                    className="text"
                    type={passShow ? "text" : type}
                    disabled={disabled}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {type === "password" &&
                <display className="icon"  onClick={() => {
                    setPassShow(!passShow)

                }}>
                    <Icon name={passShow ? "eyeOpen" : "eyeClose"}/>
                </display>}
            </div>
            <div className="helperText">{error && errorText}</div>
        </div>
    )
}

TextField.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    helperText: PropTypes.string,
    onChange: PropTypes.func
};

TextField.defaultProps = {
    type: "text",
    placeholder: "Не задано"
};
