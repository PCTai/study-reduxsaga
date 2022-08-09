
import {fork, take,call, delay,put } from 'redux-saga/effects';
import { authActions } from './authSlice';



function* handleLogin(payload){
    try {
        yield delay(1000);
        console.log('handle Login');
        localStorage.setItem('access_token', 'abc')
        yield put(authActions.loginSuccess({
            id:1,
            name :'abs',
        }))
    } catch (error) {
        yield put(authActions.loginFailed(error.message))
    }
}
function* handleLogout(payload){
    yield delay(1000);
    console.log('handle Logout');
    localStorage.removeItem('access_token')
}
function* watchLoginFlow(payload){
    while( true){
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
        if(!isLoggedIn){
            const action= yield take(authActions.login.type);
            yield fork(handleLogin, action);
        }
        yield take(authActions.logout.type);
        // use call because wait handleLogout finised => next
        yield call(handleLogout);
    }
}

export default function* authSaga(){
    console.log('auth Saga');

    yield fork(watchLoginFlow);
}