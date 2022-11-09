/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import FormActionButtons from '../../molecules/FormActionButtons';
import PageHeader from '../../molecules/PageHeader';
import CreateClassForm from '../../organisams/ClassForm';

const CreateTeacherTemplate = (props) => {
    const { 
        formRef, 
        handleCancelCreate, 
        handleSubmit, 
        teachers,
        loading,
    } = props;

    return (
        <Fragment>
            <PageHeader pageTitle="Add Class" />
            <CreateClassForm
                formRef={formRef}
                teachers={teachers}
            />
            <FormActionButtons
                cancelButtonTitle="Go Back"
                submitButtonTitle=" Add Class"
                onCancel={handleCancelCreate}
                onSubmit={handleSubmit}
                loading={loading}
            />
        </Fragment>

    );
};

export default CreateTeacherTemplate;