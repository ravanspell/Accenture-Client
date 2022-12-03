import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    teachers: [],
    loading: false,
}

export const teachersSlice = createSlice({
    name: 'teachers',
    initialState,
    reducers: {
        fetchTeachersStart: () => {
            return {
                loading: true
            };
        },
        fetchTeachersSuccess: (state, action) => {
            return {
                teachers: action.payload,
                loading: false
            };
        },
        createTeacherStart: (state) => {
            return {
                ...state,
                loading: true
            };
        },
        createTeacherEnd: (state) => {
            return {
                ...state,
                loading: false
            };
        },
        updateTeacherStart: (state) => {
            return {
                ...state,
                loading: true
            };
        },
        updateTeacherSuccess: (state) => {
            return {
                ...state,
                loading: false
            };
        },
    },
})

export const {
    fetchTeachersSuccess,
    fetchTeachersStart,
    createTeacherStart,
    createTeacherEnd,
    updateTeacherStart,
    updateTeacherSuccess,
} = teachersSlice.actions;

export default teachersSlice.reducer