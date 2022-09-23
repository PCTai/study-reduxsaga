
import cityApi from '../../api/cityApi';
import { call, put, takeLatest } from 'redux-saga/effects';
import { cityActions } from './citySlice';

function* fecthCityList(action) {
  try {
    const response = yield call(cityApi.getAll, action.payload);
    yield put(cityActions.fecthCityListSuccess(response.data));
    
  } catch (error) {
    console.log('Failed to fetch city list', error);
    yield put(cityActions.fecthCityListFailed());
  }
}

export default function* citySaga() {
  console.log("citySaga");
  yield takeLatest(cityActions.fecthCityList, fecthCityList);
}