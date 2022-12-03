import { put, call, takeLeading } from 'redux-saga/effects'
import { saveClass } from '../../services'
import { toast } from 'react-toastify';
import { createClassesEnd, fetchClassesStart } from '../slices/classes.slice';

function* handleCreateClass({ payload }) {
  try {
    const {formValues, navigate} = payload
    // send http request
    yield call(saveClass, formValues);
    toast("Class created!");
    // dispatch the action for refresh classes.
    yield put(fetchClassesStart());
    navigate(-1);
  } catch (error) {
    toast.error("Something went Wrong!")
    yield put(createClassesEnd());
  }
}
// watcher saga -> actions -> worker Saga
export default function* watchCreateClasses() {
  yield takeLeading('classes/createClassesStart', handleCreateClass)
}