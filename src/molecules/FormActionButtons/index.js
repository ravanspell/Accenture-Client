
import React from 'react';
import PropTypes from 'prop-types';
import useStyle from './styles';
import Button from '../../atoms/Button';

const FormActionButtons = (props) => {
    const classes = useStyle()
    const { 
        onCancel, 
        onSubmit, 
        cancelButtonTitle, 
        submitButtonTitle,
        loading
    } = props;

    return (
        <div className={classes.container}>
            <div className={classes.buttons}>
                <Button
                    onClick={onCancel}
                    title={cancelButtonTitle}
                    variant="outlined"
                />

                <Button
                    onClick={onSubmit}
                    title={submitButtonTitle}
                    loading={loading}
                />
            </div>
        </div>
    );
};

// set props and their data types
FormActionButtons.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    cancelButtonTitle: PropTypes.string.isRequired,
    submitButtonTitle: PropTypes.string.isRequired,
    loading: PropTypes.bool
};
// set props default values
// required props not need default value
FormActionButtons.defaultProps = {
    loading: false
};

export default FormActionButtons;
