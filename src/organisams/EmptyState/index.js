import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '@material-ui/core';
import useStyles from './styles';
import Button from '../../atoms/Button';
import AddIcon from '@material-ui/icons/Add';
import TextLabel from '../../atoms/TextLabel';

const EmptyState = (props) => {
    const {
        loading,
        onClick,
        description,
        buttonLabel,
    } = props;
    const classes = useStyles()
    return (
        <Card className={classes.container}>
            <CardContent >
                {loading ? (
                    <TextLabel>Loading ...</TextLabel>
                ) : (
                    <div className={classes.content}>
                        <TextLabel>{description}</TextLabel>
                        <Button
                            onClick={onClick}
                            startIcon={<AddIcon />}
                            title={buttonLabel}
                        />
                    </div>
                )}

            </CardContent>
        </Card>
    );
};

// set props and their data types
EmptyState.propTypes = {
    loading: PropTypes.bool,
    description: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    buttonLabel: PropTypes.string.isRequired,
};
// set props default values
// required props not need default value
EmptyState.defaultProps = {
    loading: false,
    description: ''
};

export default EmptyState;
