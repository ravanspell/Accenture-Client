import { put, call, takeLeading } from 'redux-saga/effects'
import { saveTeacher } from '../../services'
import { toast } from 'react-toastify';
import { fetchTeachersStart } from '../slices/teachers.slice';


function* handleCreateTeacher({ payload }) {
  try {
    // send http request
    yield call(saveTeacher, payload);
    toast("Class created!");
    // dispatch the action for refresh classes.
    yield put(fetchTeachersStart());
  } catch (error) {
    toast.error("Something went Wrong!")
  }
}
// watcher saga -> actions -> worker Saga
export default function* watchCreateClasses() {
  yield takeLeading('teachers/createTeacherStart', handleCreateTeacher)
}