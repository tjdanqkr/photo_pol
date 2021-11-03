import { put, takeEvery, call } from 'redux-saga/effects';
import { userLogType } from '../userLog';
interface actionType {
  type: string;
  payload: userLogType;
}
function* insertUserLog(action: any) {
  try {
    yield put({ type: 'userLog/postUserLog', userLog: action.userLog[0] });
    yield put({ type: 'theme/darkMode' });
  } catch (e) {
    yield console.log(e);
  }
}

export function* watchpostUserLog() {
  yield takeEvery('INSERT_USER_LOG', insertUserLog);
}
