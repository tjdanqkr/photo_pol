import { all } from '@redux-saga/core/effects';
import { watchpostUserLog } from './userLogSaga';

export default function* rootSaga() {
  yield all([watchpostUserLog()]);
}
