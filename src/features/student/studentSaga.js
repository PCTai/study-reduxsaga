
import studentApi from '../../api/studentApi';
import { call, debounce, put, takeLatest } from 'redux-saga/effects';
import { studentActions } from './studentSlice';

function* fetchStudentList(action) {
  try {
    const response = yield call(studentApi.getAllStudent, action.payload);
    yield put(studentActions.fetchStudentListSuccess(response));
    
  } catch (error) {
    console.log('Failed to fetch student list', error);
    yield put(studentActions.fetchStudentListFailed());
  }
}

function* handleSearchDebounce(action) {
  yield put(studentActions.setFilter(action.payload));
}

export default function* studentSaga() {
  console.log("studentSaga");
  yield takeLatest(studentActions.fetchStudentList, fetchStudentList);

  yield debounce(500, studentActions.setFilterWithDebounce.type, handleSearchDebounce);
}