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
  statistics: statisticsType[];
  activeKey: number[];
}

// Define the initial state using that type
const initialState: LottoState = {
  lottoList: [],
  suggestion: [],
  statistics: [],
  activeKey: [],
};

interface IPayLoadLottoState {
  round: number;
  myLottoList: number[][];
}
interface IPayLoadActiveKeyState {
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
    LOTTOREMOVE: (state) => {
      console.log(state.lottoList);
    },
    LOTTOANALYZE: (state) => {
      console.log(state.lottoList);
    },
    LOTTOACTIVEKEY: (state, action: PayloadAction<IPayLoadActiveKeyState>) => {
      let tmpActiveKey = state.activeKey;
      const { key } = action.payload;
      const index = tmpActiveKey.findIndex((data) => data === key);
      index > -1 ? tmpActiveKey.splice(index, 1) : tmpActiveKey.push(key);
      state.activeKey = tmpActiveKey;
    },
  },
});

export const { LOTTOADD, LOTTOREMOVE, LOTTOANALYZE, LOTTOACTIVEKEY } =
  lottoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMyNumber = (state: RootState) => state.lotto.lottoList;
export const selectMyStatisticsNumber = (state: RootState) =>
  state.lotto.statistics;
export const selectAnalyzeNumber = (state: RootState) => state.lotto.suggestion;

export default lottoSlice.reducer;
