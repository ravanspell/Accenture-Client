import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CreateClassesTemplate from '../templates/CreateClassTemplate.js/index.js';
import { useNavigate } from "react-router-dom";
import { createClassesStart } from '../redux/slices/classes.slice.js';
import { fetchTeachersStart } from '../redux/slices/teachers.slice.js';

const CreateClasses = () => {
    const dispatch = useDispatch()
    const teachers = useSelector(state => state.teachers.teachers)
    const { loading } = useSelector(state => state.classes)
    const formRef = useRef()
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchTeachersStart())
    }, []);

    const handleCancelCreate = () => {
        navigate(-1)
    }

    const handleSubmit = async () => {
        const validationErrors = await formRef.current.validateForm();

        if (Object.keys(validationErrors).length === 0) {
            const formValues = formRef.current.values;
            dispatch(createClassesStart(formValues));
        }
    }

    return (
        <div>
            <CreateClassesTemplate
                formRef={formRef}
                handleCancelCreate={handleCancelCreate}
                handleSubmit={handleSubmit}
                teachers={teachers}
                loading={loading}
            />
        </div>
    );
};

export default CreateClasses;
