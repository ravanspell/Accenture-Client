import { put, call, takeLeading } from 'redux-saga/effects'
import { saveClass } from '../../services'
import { toast } from 'react-toastify';
import { fetchClassesStart } from '../slices/classes.slice';

function* handleCreateClass({ payload }) {
  try {
    // send http request
    yield call(saveClass, payload);
    toast("Class created!");
    // dispatch the action for refresh classes.
    yield put(fetchClassesStart());
  } catch (error) {
    toast.error("Something went Wrong!")
  }
}
// watcher saga -> actions -> worker Saga
export default function* watchCreateClasses() {
  yield takeLeading('classes/createClassesStart', handleCreateClass)
}