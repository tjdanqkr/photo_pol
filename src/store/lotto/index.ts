import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state

type statisticsType = {
  num: number;
  appearance: number;
};
type myLottoList = {
  round: number;
  myLottoList: number[][];
};

interface LottoState {
  lottoList: myLottoList[];
  suggestion: number[][];
  statisticsNumDesc: statisticsType[];
  statisticsAppDesc: statisticsType[];
  activeKey: number[];
  camera: boolean;
}

// Define the initial state using that type
const initialState: LottoState = {
  lottoList: [],
  suggestion: [],
  statisticsNumDesc: [],
  statisticsAppDesc: [],
  activeKey: [],
  camera: true,
};

interface IPayLoadLottoState {
  round: number;
  myLottoList: number[][];
}
interface IPayLoadActiveKeyState {
  key: number;
  type: 'open' | 'close';
}
interface IPayLoadRemoveState {
  key: number;
}

export const lottoSlice = createSlice({
  name: 'lotto',
  initialState,
  reducers: {
    LOTTOADD: (state, action: PayloadAction<IPayLoadLottoState>) => {
      const { myLottoList, round } = action.payload;
      const obj = { round, myLottoList };
      state.lottoList.push(obj);
    },
    LOTTOREMOVE: (state, action: PayloadAction<IPayLoadRemoveState>) => {
      const { activeKey, lottoList } = state;
      const { key } = action.payload;
      const newActiveKey = activeKey
        .filter((data) => data !== key)
        .map((data) => (data > key ? data - 1 : data));
      state.activeKey = newActiveKey;
      lottoList.splice(key, 1);
    },
    LOTTOANALYZE: (state) => {
      //많이 나온숫자 랑 적게 나온수
      const { lottoList } = state;
      let statisticsList: statisticsType[] = [];
      lottoList.forEach((list) => {
        list.myLottoList.flat().forEach((num) => {
          const findI = statisticsList.findIndex(
            (statistics) => statistics.num === num,
          );
          findI > -1
            ? statisticsList[findI].appearance++
            : statisticsList.push({ num, appearance: 1 });
        });
      });
      const NumDesc = statisticsList.sort((a, b) => a.num - b.num);
      const AppDesc = statisticsList.sort(
        (a, b) => b.appearance - a.appearance,
      );
      state.statisticsNumDesc = NumDesc;
      state.statisticsAppDesc = AppDesc;
    },
    LOTTOACTIVEKEY: (state, action: PayloadAction<IPayLoadActiveKeyState>) => {
      let { activeKey } = state;
      const { key, type } = action.payload;

      if (type === 'close') {
        state.activeKey = activeKey.filter((data) => data !== key);
      } else {
        activeKey.push(key);
      }
    },
    LOTTOCAMERA: (state) => {
      state.camera = !state.camera;
    },
  },
});

export const {
  LOTTOADD,
  LOTTOREMOVE,
  LOTTOANALYZE,
  LOTTOACTIVEKEY,
  LOTTOCAMERA,
} = lottoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMyNumber = (state: RootState) => state.lotto.lottoList;
export const selectMyStatisticsAppDesc = (state: RootState) =>
  state.lotto.statisticsAppDesc;
export const selectMyStatisticsMumDesc = (state: RootState) =>
  state.lotto.statisticsNumDesc;
export const selectAnalyzeNumber = (state: RootState) => state.lotto.suggestion;

export default lottoSlice.reducer;
