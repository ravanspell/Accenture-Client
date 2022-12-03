import { put, call, takeLeading } from 'redux-saga/effects'
import { saveTeacher } from '../../services'
import { toast } from 'react-toastify';
import { createTeacherEnd, fetchTeachersStart } from '../slices/teachers.slice';


function* handleCreateTeacher({ payload }) {
  try {
    const {formValues, navigate} = payload
    // send http request
    yield call(saveTeacher, formValues);
    toast("Teacher created!");
    // dispatch the action for refresh classes.
    yield put(fetchTeachersStart());
    navigate(-1);
  } catch (error) {
    toast.error("Something went Wrong!")
    yield put(createTeacherEnd());
  }
}
// watcher saga -> actions -> worker Saga
export default function* watchCreateClasses() {
  yield takeLeading('teachers/createTeacherStart', handleCreateTeacher)
}