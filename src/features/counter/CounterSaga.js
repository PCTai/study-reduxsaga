
import {takeEvery} from 'redux-saga/effects'

export function* log(){
    console.log('log');
}
export default function* CounterSaga(){
    console.log("counter saga");

    yield takeEvery('*',log);
}