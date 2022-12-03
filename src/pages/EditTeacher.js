import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchTeachersStart, updateTeacherStart } from '../redux/slices/teachers.slice.js';
import EditTeacherTemplate from '../templates/EditTeacherTemplate.js/index.js';

const EditTeacher = () => {
    const dispatch = useDispatch()
    const { loading, teachers } = useSelector(state => state.teachers)

    const formRef = useRef()
    const navigate = useNavigate();

    // get the search params and select id value
    const { search } = useLocation()
    const teacherId = new URLSearchParams(search).get('id')

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
            dispatch(updateTeacherStart({formValues, navigate}));
        }
    }
    // filter teacher from redux store
    const teacherData = (teachers || []).find(teacher => teacher.email === teacherId) || {}

    return (
        <div>
            <EditTeacherTemplate
                formRef={formRef}
                handleCancelCreate={handleCancelCreate}
                handleSubmit={handleSubmit}
                loading={loading}
                initialValues={teacherData}
            />
        </div>
    );
};

export default EditTeacher;
