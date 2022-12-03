import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    classes: [],
    loading: false,
}

export const classesSlice = createSlice({
    name: 'classes',
    initialState,
    reducers: {
        fetchClassesStart: () => {
            return {
                loading: true
            };
        },
        fetchClassesSuccess: (state, action) => {
            return {
                classes: action.payload,
                loading: false
            };
        },
        createClassesStart: (state) => {
            return {
                ...state,
                loading: true
            };
        },
        createClassesEnd: (state) => {
            return {
                ...state,
                loading: false
            };
        },
    },
})

export const {
    fetchClassesSuccess, 
    fetchClassesStart,
    createClassesStart,
    createClassesEnd,
} = classesSlice.actions;

export default classesSlice.reducer