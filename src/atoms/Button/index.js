import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";

const ButtonComponent = (props) => {
    const {
        disabled, 
        onClick, 
        size, 
        startIcon, 
        endIcon, 
        variant
    } = props;
    return (
        <Button
            variant={variant}
            color="primary"
            disabled={disabled}
            onClick={onClick}
            size={size}
            startIcon={startIcon}
            endIcon={endIcon}
        >
            {props.title}
        </Button>
    );
}

ButtonComponent.propTypes = {
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    startIcon: PropTypes.node,
    endIcon: PropTypes.node,
    variant: PropTypes.oneOf(['outlined', 'text', 'string','contained']),
};

ButtonComponent.defaultProps = {
    disabled: false,
    size: 'medium',
    startIcon: <></>,
    endIcon: <></>,
    variant: "contained"
};

export default ButtonComponent;