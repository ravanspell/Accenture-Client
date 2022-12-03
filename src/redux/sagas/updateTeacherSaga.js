import { put, call, takeLeading } from 'redux-saga/effects'
import { updateTeacher } from '../../services'
import { toast } from 'react-toastify';
import { updateTeacherSuccess } from '../slices/teachers.slice';

function* handleEditTeacher({ payload }) {
  try {
    const {formValues, navigate} = payload
    // send http request
    yield call(updateTeacher, formValues);
    toast("Teacher updated!");
    // dispatch the action for refresh classes.
    yield put(updateTeacherSuccess());
    navigate(-1);
  } catch (error) {
    toast.error("Something went Wrong!")
    // since disable loading use this action here as well.
    yield put(updateTeacherSuccess());
  }
}
// watcher saga -> actions -> worker Saga
export default function* watchUpdateTeacher() {
  yield takeLeading('teachers/updateTeacherStart', handleEditTeacher)
}