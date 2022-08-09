import {all} from 'redux-saga/effects'
import authSaga from '../features/auth/authSaga';
import CounterSaga from '../features/counter/CounterSaga';

function* helloSaga(){
    console.log("hello Saga");
}

export default function* rootSaga(){
    yield all([CounterSaga(),authSaga()]);
}