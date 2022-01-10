import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Define a type for the slice state

type statisticsType = {
  num: number;
  appearance: number;
};

interface LottoState {
  lottoList: number[][];
  suggestion: number[][];
  statistics: statisticsType[];
}

// Define the initial state using that type
const initialState: LottoState = {
  lottoList: [],
  suggestion: [],
  statistics: [],
};

export const lottoSlice = createSlice({
  name: 'lotto',
  initialState,
  reducers: {
    add: (state) => {
      console.log(state.lottoList);
    },
    remove: (state) => {
      console.log(state.lottoList);
    },
    analyze: (state) => {
      console.log(state.lottoList);
    },
  },
});

export const { add, remove, analyze } = lottoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMyNumber = (state: RootState) => state.lotto.lottoList;
export const selectMyStatisticsNumber = (state: RootState) =>
  state.lotto.statistics;
export const selectAnalyzeNumber = (state: RootState) => state.lotto.suggestion;

export default lottoSlice.reducer;
