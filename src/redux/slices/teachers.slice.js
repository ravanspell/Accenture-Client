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
        createTeacherStart: () => {
            return {
                loading: true
            };
        },
    },
})

export const {
    fetchTeachersSuccess,
    fetchTeachersStart,
    createTeacherStart,
} = teachersSlice.actions;

export default teachersSlice.reducer