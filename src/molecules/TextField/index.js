import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextLabel from '../../atoms/TextLabel';
import TextInput from '../../atoms/TextInput';
import useStyles from './style'

const TextField = (props) => {
    const { label, error } = props;
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.labelContainer}>
                <TextLabel> {label} </TextLabel>
            </div>
            <TextInput {...props} />
            {error &&
                <div className={classes.errorContainer}>
                    <div className={classes.errorText}>{error} </div>
                </div>
            }
        </Fragment>
    );
};

// set props and their data types
TextField.propTypes = {
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    value: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
};
// set props default values
// required props not need default value
TextField.defaultProps = {
    disabled: false,
    size: 'medium',
    value: '',
    className: '',
    error: '',
    placeholder: '',
    label: ''
};


export default TextField;