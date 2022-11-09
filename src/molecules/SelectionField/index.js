import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TextLabel from '../../atoms/TextLabel';
import useStyles from './style'
import SelectionComponent from '../../atoms/Selection';

const SelectionField = (props) => {
    const { label, error } = props;
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.labelContainer}>
                <TextLabel> {label} </TextLabel>
            </div>
            <SelectionComponent {...props} />
            {error &&
                <div className={classes.errorContainer}>
                    <div className={classes.errorText}>{error} </div>
                </div>
            }
        </Fragment>
    );
};

// set props and their data types
SelectionField.propTypes = {
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.any),
    placeholder: PropTypes.string,
    label: PropTypes.string,
    error: PropTypes.string,
};
// set props default values
// required props not need default value
SelectionField.defaultProps = {
    disabled: false,
    value: '',
    list: [],
    placeholder: '',
    label: '',
    error: '',
};


export default SelectionField;