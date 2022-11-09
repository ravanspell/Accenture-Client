import React from "react";
import PropTypes from "prop-types";
import { MenuItem, Select, FormControl } from "@material-ui/core";



const SelectionComponent = (props) => {
    const {
        disabled,
        list,
        onChange,
        value,
        name,
        placeholder,
    } = props;

    const renderPlaceholder = (placeholder) => {
        return (
            <div style={{ color: '#b3b3b3' }}>
                {placeholder}
            </div>
        )
    }
    return (
        <FormControl size="small" fullWidth>
            <Select
                value={value}
                onChange={onChange}
                disabled={disabled}
                name={name}
                variant="outlined"
                size="small"
                fullWidth
                displayEmpty={true}
                renderValue={value => value?.length ? Array.isArray(value) ? value.join(', ') : value : renderPlaceholder(placeholder)}
            >
                {list.map(({ label, value }) => (
                    <MenuItem key={value} value={value}>{label}</MenuItem>
                ))}
            </Select>
        </FormControl>

    );
}

SelectionComponent.propTypes = {
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.any),
    placeholder: PropTypes.string,
};

SelectionComponent.defaultProps = {
    disabled: false,
    value: '',
    list: [],
    placeholder: ''
};

export default SelectionComponent;