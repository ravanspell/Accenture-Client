/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import FormActionButtons from '../../molecules/FormActionButtons';
import PageHeader from '../../molecules/PageHeader';
import CreateTeacherForm from '../../organisams/TeacherForm';

const CreateClassesTemplate = (props) => {
    const { 
        formRef, 
        handleCancelCreate, 
        handleSubmit, 
        loading,
    } = props;

    return (
        <Fragment>
            <PageHeader pageTitle="Add Teacher" />
            <CreateTeacherForm
                formRef={formRef}
            />
            <FormActionButtons
                cancelButtonTitle="Go Back"
                submitButtonTitle=" Add Teacher"
                onCancel={handleCancelCreate}
                onSubmit={handleSubmit}
                loading={loading}
            />
        </Fragment>

    );
};

export default CreateClassesTemplate;