
import {takeEvery} from 'redux-saga/effects'

export function* log(){
    console.log('log');
}
export default function* CounterSaga(){

    yield takeEvery('*',log);
}