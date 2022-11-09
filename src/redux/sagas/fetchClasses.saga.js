import { put, call, takeEvery } from 'redux-saga/effects'
import { fetchClasses } from '../../services'
import { toast } from 'react-toastify';
import { fetchClassesSuccess } from '../slices/classes.slice';

function* handleFetchClasses() {
  try {
    const { data } = yield call(fetchClasses);
    const classes = (data?.data || []).map((cls, index) => ({ ...cls, id: index + 1 }))
    yield put(fetchClassesSuccess(classes))
  } catch (error) {
    toast.error("Something went Wrong!")
  }
}
// watcher saga -> actions -> worker Saga
export default function* watchFetchClasses() {
  yield takeEvery('classes/fetchClassesStart', handleFetchClasses)
}