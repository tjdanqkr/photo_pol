import { AxiosResponse } from 'axios';
import { put, takeEvery, call, takeLatest } from 'redux-saga/effects';
import coronaApi from '../../api/corona';
import { coronaDataType } from '.';

type coronaResType = {
  Corona19Status: SuccessType;
};
type SuccessType = {
  list_total_count: number;
  RESULT: {
    CODE: string;
    MESSAGE: string;
  };
  row: coronaDataType[];
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
      payload: corona.data.Corona19Status.row,
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
