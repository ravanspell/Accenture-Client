import {combineReducers} from 'redux';
import teachersSlice from './teachers.slice';
import classesSlice from './classes.slice';

const reducers = combineReducers({
    teachers: teachersSlice,
    classes: classesSlice,
});

export default reducers;