import { all } from '@redux-saga/core/effects';
import { getCoronaApi } from '../corona/coronaSaga';

export default function* rootSaga() {
  yield all([getCoronaApi()]);
}
