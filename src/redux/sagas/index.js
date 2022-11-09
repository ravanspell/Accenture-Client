import { all } from 'redux-saga/effects'
import watchFetchTeachers from '../sagas/fetchTeachers.saga'
import watchFetchClasses from '../sagas/fetchClasses.saga'
import watchCreateClasses from '../sagas/createClass.saga'
import watchCreateTeacher from '../sagas/createTeacher.saga'

function* rootSaga() {
  yield all([
    watchFetchTeachers(),
    watchFetchClasses(),
    watchCreateClasses(),
    watchCreateTeacher(),
  ])
}
export default rootSaga