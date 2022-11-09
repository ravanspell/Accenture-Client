import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";

const TextInput = (props) => {
    const {disabled, onChange, value, name, className, placeholder} = props;
    return (
        <TextField
            onChange={onChange}
            value={value}
            disabled={disabled}
            name={name}
            className={className}
            label=""
            variant="outlined"
            size="small"
            fullWidth
            placeholder={placeholder}
        />
    );
}

TextInput.propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
};

TextInput.defaultProps = {
    disabled: false,
    size: 'medium',
    value: '',
    className: '',
    placeholder: ''
};

export default TextInput;