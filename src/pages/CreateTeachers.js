import React, { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTeacherStart } from '../redux/slices/teachers.slice.js';
import CreateTeacherTemplate from '../templates/CreateTeacherTemplate';

const CreateTeachers = () => {
    const dispatch = useDispatch()
    const { loading } = useSelector(state => state.teachers)
    const formRef = useRef()
    const navigate = useNavigate();

    const handleCancelCreate = () => {
        navigate(-1)
    }

    const handleSubmit = async () => {
        const validationErrors = await formRef.current.validateForm();

        if (Object.keys(validationErrors).length === 0) {
            const formValues = formRef.current.values;
            dispatch(createTeacherStart(formValues));
        }
    }

    return (
        <div>
            <CreateTeacherTemplate
                formRef={formRef}
                handleCancelCreate={handleCancelCreate}
                handleSubmit={handleSubmit}
                loading={loading}
            />
        </div>
    );
};

export default CreateTeachers;
