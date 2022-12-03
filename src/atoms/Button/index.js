import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";

const ButtonComponent = (props) => {
    const {
        disabled,
        onClick,
        size,
        startIcon,
        endIcon,
        variant,
        loading,
    } = props;
    return (
        <Button
            variant={variant}
            color="primary"
            disabled={disabled || loading}
            onClick={onClick}
            size={size}
            startIcon={startIcon}
            endIcon={endIcon}
        >
            <>
                {props.title}
                {loading &&
                    <CircularProgress
                        style={{ marginLeft: "5px" }}
                        size={15}
                        color="inherit"
                    />
                }
            </>
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
    variant: PropTypes.oneOf(['outlined', 'text', 'string', 'contained']),
    loading: PropTypes.bool,
};

ButtonComponent.defaultProps = {
    disabled: false,
    size: 'medium',
    startIcon: <></>,
    endIcon: <></>,
    variant: "contained",
    loading: false,
};

export default ButtonComponent;