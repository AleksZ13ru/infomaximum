import React from "react";
import PropTypes from "prop-types";
import './TextField.css';
import Icon from "./Icon";

export default function TextField(props) {
    const {input, label, type, meta:{ touched, error} } = props;
    const [passShow, setPassShow] = React.useState(false);
    let className = "textField";
    if (touched && error) {
        className+=" er";
    }

    return (
        <div className="textFieldWrapper">
            <div className={className}>
                <input
                    {...input}
                    className="text"
                    type={passShow ? "text" : type}
                    placeholder={label}
                />
                {type === "password" &&
                <div className="icon"  onClick={() => {
                    setPassShow(!passShow)

                }}>
                    <Icon name={passShow ? "eyeOpen" : "eyeClose"}/>
                </div>}
            </div>
            {touched && ((error && <div className="helperText">{error}</div>))}
        </div>
    )
}

TextField.propTypes = {
    input: PropTypes.any,
    label: PropTypes.string,
    type: PropTypes.string
};

TextField.defaultProps = {
    type: "text",
    label: "Не задано"
};
