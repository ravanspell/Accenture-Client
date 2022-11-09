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
        createClassesStart: () => {
            return {
                loading: true
            };
        },
    },
})

export const {
    fetchClassesSuccess, 
    fetchClassesStart,
    createClassesStart,
} = classesSlice.actions;

export default classesSlice.reducer