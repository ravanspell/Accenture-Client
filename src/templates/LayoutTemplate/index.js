/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import Header from '../../organisams/Header';

const LayoutTemplate = (props) => {
    const { children } = props;

    return (
        <Fragment>
            <Header />
                {children}
        </Fragment>
    );
};

export default LayoutTemplate;