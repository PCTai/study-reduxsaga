
import { push } from 'connected-react-router';
import {fork, take,call, delay,put } from 'redux-saga/effects';
import { authActions } from './authSlice';



function* handleLogin(payload){
    try {
        yield delay(1000);
        console.log('handle Login');
        localStorage.setItem('access_token', 'fake_token')
        yield put(authActions.loginSuccess({
            id:1,
            name :'abs',
        }))
        yield put(push("/admin/dashboard"));
    } catch (error) {
        yield put(authActions.loginFailed(error.message))
    }
}
function* handleLogout(payload){
    yield delay(1000);
    console.log('handle Logout');
    localStorage.removeItem('access_token');
    yield put(push("/login"));
}
function* watchLoginFlow(payload){
    while( true){
        const isLoggedIn = Boolean(localStorage.getItem('access_token'));
        if(!isLoggedIn){
            const action= yield take(authActions.login.type);
            yield fork(handleLogin, action.payload);
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