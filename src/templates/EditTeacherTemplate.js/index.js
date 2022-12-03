/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import FormActionButtons from '../../molecules/FormActionButtons';
import PageHeader from '../../molecules/PageHeader';
import CreateTeacherForm from '../../organisams/TeacherForm';

const EditTeacherTemplate = (props) => {
    const {
        formRef,
        handleCancelCreate,
        handleSubmit,
        loading,
        initialValues
    } = props;

    return (
        <Fragment>
            <PageHeader pageTitle="Edit Teacher" />
            <CreateTeacherForm
                formRef={formRef}
                initialValues={initialValues}
            />
            <FormActionButtons
                cancelButtonTitle="Go Back"
                submitButtonTitle="Save Changes"
                onCancel={handleCancelCreate}
                onSubmit={handleSubmit}
                loading={loading}
            />
        </Fragment>

    );
};

export default EditTeacherTemplate;