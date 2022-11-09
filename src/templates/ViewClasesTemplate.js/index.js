/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import PageHeader from '../../molecules/PageHeader';
import TableComponent from '../../organisams/Table';
import Button from '../../atoms/Button';
import AddIcon from '@material-ui/icons/Add';
import EmptyState from '../../organisams/EmptyState';

const ViewClassesTemplate = (props) => {
    const { classes, goToCreateClass, loading } = props;

    const columns = [
        { columnName: '#', key: 'id' },
        { columnName: 'Class Level', key: 'level' },
        { columnName: 'Class Name', key: 'name' },
        { columnName: 'Form Teacher', key: 'formTeacher.name' },
    ]
    const renderPageHeaderContent = () => {
        return (
            <Button title='Add Class' startIcon={<AddIcon />} onClick={goToCreateClass} />
        )
    }

    return (
        <Fragment>
            <PageHeader pageTitle="Classes" renderContent={renderPageHeaderContent} />
            {loading || classes.length === 0 ? (
                <EmptyState
                    loading={loading}
                    onClick={goToCreateClass}
                    description="There are no existing classes yet."
                    buttonLabel="Add Class"
                />
            ) : (
                <TableComponent
                    columns={columns}
                    data={classes}
                />
            )}
        </Fragment>

    );
};

export default ViewClassesTemplate;