import React from "react";
import PropTypes from "prop-types";
import { Link } from "@material-ui/core";



const EditActionButton = (props) => {
    const {
        onClick,
        label
    } = props;

    return (
        <Link
            component="button"
            variant="body2"
            onClick={onClick}
        >
            {label}
        </Link>
    );
}

EditActionButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};

EditActionButton.defaultProps = {
    label: ''
};

export default EditActionButton;