/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import PageHeader from '../../molecules/PageHeader';
import TableComponent from '../../organisams/Table';
import Button from '../../atoms/Button';
import AddIcon from '@material-ui/icons/Add';
import EmptyState from '../../organisams/EmptyState';

const ViewTeachersTemplate = (props) => {
    const { teachers, goToCreateTeacher, loading } = props;

    const columns = [
        { columnName: '#', key: 'id' },
        { columnName: 'Name', key: 'name' },
        { columnName: 'Subject', key: 'subject' },
        { columnName: 'Email', key: 'email' },
        { columnName: 'Work Contact', key: 'contactNumber' },
    ]
    const renderPageHeaderContent = () => {
        return (
            <Button title='Add Teacher' startIcon={<AddIcon />} onClick={goToCreateTeacher} />
        )
    }

    return (
        <Fragment>
            <PageHeader pageTitle="Teachers" renderContent={renderPageHeaderContent} />
            {loading || teachers.length === 0 ? (
                <EmptyState
                    loading={loading}
                    onClick={goToCreateTeacher}
                    description="There are no existing teachers yet."
                    buttonLabel="Add Teacher"
                />
            ) : (
                <TableComponent
                    columns={columns}
                    data={teachers}
                />
            )}
        </Fragment>

    );
};

export default ViewTeachersTemplate;