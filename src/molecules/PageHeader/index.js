import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import TextLabel from '../../atoms/TextLabel';

const PageHeader = (props) => {
    const { pageTitle, renderContent } = props;

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={{marginBottom: "30px"}}
        >
            <TextLabel variant="pageHeader">{pageTitle}</TextLabel>
            <TextLabel>{renderContent()}</TextLabel>
        </Grid>
    );
};

// set props and their data types
PageHeader.propTypes = {
    pageTitle: PropTypes.string,
    renderContent: PropTypes.func,
};
// set props default values
// required props not need default value
PageHeader.defaultProps = {
    pageTitle: '',
    renderContent: () => <></>
};

export default PageHeader;