import { put, call, takeEvery } from 'redux-saga/effects'
import { fetchTeachers } from '../../services'
import { toast } from 'react-toastify';
import { fetchTeachersSuccess } from '../slices/teachers.slice';

function* handleFetchTeachers() {
  try {
    const { data } = yield call(fetchTeachers);
    const teachers = (data?.data || []).map((teacher, index) => ({ ...teacher, id: index + 1 }))
    yield put(fetchTeachersSuccess(teachers))
  } catch (error) {
    toast.error("Something went Wrong!")
  }
}
// watcher saga -> actions -> worker Saga
export default function* watchCreateTeacher() {
  yield takeEvery('teachers/fetchTeachersStart', handleFetchTeachers)
}