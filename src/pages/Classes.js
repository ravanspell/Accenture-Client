import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid } from '@material-ui/core';
import ViewClassesTemplate from '../templates/ViewClasesTemplate.js';
import { useNavigate } from "react-router-dom";
import { fetchClassesStart } from '../redux/slices/classes.slice.js';

const Classes = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { classes, loading } = useSelector(state => state.classes)

    useEffect(() => {
        dispatch(fetchClassesStart())
    }, []);

    const goToCreateClass = useCallback(() => {
        navigate('/class/add')
    }, [])

    return (
        <Grid style={{height: '100%'}}>
            <ViewClassesTemplate
                classes={classes}
                goToCreateClass={goToCreateClass}
                loading={loading}
            />
        </Grid>
    );
};

export default Classes;
