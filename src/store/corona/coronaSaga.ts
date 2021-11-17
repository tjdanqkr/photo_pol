import { AxiosResponse } from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';
import coronaApi from '../../api/corona';
import { coronaDataType } from '.';

type coronaResType = {
  Corona19Status: SuccessType;
};
type SuccessType = {
  corona: coronaDataType[];
  maxLength: number;
};
type actionType = {
  index: number;
  type: string;
};

function* callCoronaApi(action: actionType) {
  try {
    const corona: AxiosResponse<coronaResType> = yield call(
      coronaApi,
      action.index,
    );

    yield put({
      type: 'corona/SUSSESS_CORONA',
      payload: corona.data,
    });
  } catch (e) {
    if (e instanceof Error) {
      yield put({
        type: 'corona/FAIL_CORONA',
        payload: e.message,
      });
    }
  }
}

export function* getCoronaApi() {
  yield takeEvery('GET_CORONA', callCoronaApi);
}
