import React from "react";
import PropTypes from "prop-types";
import './TextField.css';
import EyeOpened from './Icon/svg/EyeOpened.svg'
import Icon from "./Icon";

export default function TextField(props) {
    const {type, value, disabled, label, error, helperText, onClick, placeholder, onChange} = props;
    const [passShow, setPassShow] = React.useState(false);

    return (
        <div className="wrapper">
            <div>{label}</div>
            <div className="TextField" style={error && {border: '1px solid #EE4141'}}>
                <input
                    className="Text"
                    type={passShow ? "text" : type}
                    disabled={disabled}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {type === "password" &&
                <display className="Icon"  onClick={() => {
                    setPassShow(!passShow)

                }}>
                    <Icon name={passShow ? "eyeOpen" : "eyeClose"}/>
                </display>}
            </div>
            <div className="helperText">{error && "Произошла ошибка"}</div>
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
