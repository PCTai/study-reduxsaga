import {all} from 'redux-saga/effects'
import authSaga from '../features/auth/authSaga';
import studentSaga from '../features/student/studentSaga';
import dashboardSaga from '../features/dashboard/dashboardSaga';
import citySaga from '../features/city/citySaga';

export default function* rootSaga(){
    yield all([authSaga(), studentSaga(), dashboardSaga(),citySaga()]);
}