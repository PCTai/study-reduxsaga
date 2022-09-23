import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga';
import authReducer from '../features/auth/authSlice';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import studentReducer from '../features/student/studentSlice';
import dashboardReducer from '../features/dashboard/dashboardSlice';
import cityReducer from '../features/city/citySlice';


export const history = createBrowserHistory();
const sagaMidleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    router: connectRouter(history),
    counter: counterReducer,
    auth: authReducer,
    student: studentReducer,
    dashboard: dashboardReducer,
    city: cityReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMidleware, routerMiddleware(history)),

});
sagaMidleware.run(rootSaga);
