import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid } from '@material-ui/core';
import ViewTeachersTemplate from '../templates/ViewTeachersTemplate';
import { useNavigate } from "react-router-dom";
import { fetchTeachersStart } from '../redux/slices/teachers.slice';

const Teachers = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { teachers, loading } = useSelector(state => state.teachers)

    useEffect(() => {
        dispatch(fetchTeachersStart())
    }, []);

    const goToCreateTeacher = useCallback(() => {
        navigate('/teacher/add')
    }, [])

    return (
        <Grid style={{height: '100%'}}>
            <ViewTeachersTemplate
                teachers={teachers}
                goToCreateTeacher={goToCreateTeacher}
                loading={loading}
            />
        </Grid>
    );
};

export default Teachers;
