import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

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
  toast: boolean;
  recommendList: number[][];
}

// Define the initial state using that type
const initialState: LottoState = {
  lottoList: [],
  suggestion: [],
  statisticsNumDesc: [],
  statisticsAppDesc: [],
  activeKey: [],
  camera: true,
  toast: false,
  recommendList: [],
};

interface IPayLoadLottoState {
  round: number;
  myLottoList: number[][];
}
interface IPayLoadActiveKeyState {
  key: number;
  type: "open" | "close";
}
interface IPayLoadRemoveState {
  key: number;
}

export const lottoSlice = createSlice({
  name: "lotto",
  initialState,
  reducers: {
    LOTTOADD: (state, action: PayloadAction<IPayLoadLottoState>) => {
      const { myLottoList, round } = action.payload;
      const obj = { round, myLottoList };
      state.lottoList.push(obj);
      state.toast = true;
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
            (statistics) => statistics.num === num
          );
          findI > -1
            ? statisticsList[findI].appearance++
            : statisticsList.push({ num, appearance: 1 });
        });
      });
      const NumDesc = statisticsList.sort((a, b) => a.num - b.num);
      const AppDesc = statisticsList.sort(
        (a, b) => b.appearance - a.appearance
      );
      state.statisticsNumDesc = NumDesc;
      state.statisticsAppDesc = AppDesc;
    },
    LOTTOACTIVEKEY: (state, action: PayloadAction<IPayLoadActiveKeyState>) => {
      let { activeKey } = state;
      const { key, type } = action.payload;

      if (type === "close") {
        state.activeKey = activeKey.filter((data) => data !== key);
      } else {
        activeKey.push(key);
      }
    },
    LOTTOCAMERA: (state) => {
      state.camera = !state.camera;
    },
    LOTTOTOASTCLOSE: (state) => {
      state.toast = false;
    },
    LOTTORECOMMEND: (state) => {
      const { lottoList, statisticsNumDesc, statisticsAppDesc } = state;
      // const topList = statisticsNumDesc.map(data).appearance;
    },
  },
});

const makeTopList = (statisticsNumDesc: statisticsType[]) => {
  const maxCount = 5;
  const maxLottoNumber = 6;
  let count = 0;
  let countAppearance = statisticsNumDesc[0].appearance;
  let top5List = [];
  while (top5List.length < maxLottoNumber) {
    const countNum = statisticsNumDesc.filter(
      (data) => countAppearance === data.appearance
    );
    count = +countNum.length;

    if (count <= maxCount) {
      countAppearance--;
      countNum.forEach((data) => {
        top5List.push(data.num);
      });
    } else {
      const popNums = 5 - top5List.length;
      for (let i = 0; i < popNums; i++) {
        const randomIndex = Math.floor(Math.random() * countNum.length);
        let selectNum = countNum[randomIndex].num;
        top5List.filter((data) => selectNum === data).length > 0
          ? i--
          : top5List.push(selectNum);
      }
    }
  }
};

const deduplicationFunc = (state: RootState, testList: number[]) => {
  const { lottoList } = state.lotto;
  let pass = true;
  lottoList.forEach(
    (data) =>
      (pass =
        data.myLottoList.filter((myLotto) => myLotto === testList).length > 0
          ? false
          : pass)
  );
  return pass;
};
export const {
  LOTTOADD,
  LOTTOREMOVE,
  LOTTOANALYZE,
  LOTTOACTIVEKEY,
  LOTTOCAMERA,
  LOTTOTOASTCLOSE,
} = lottoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMyNumber = (state: RootState) => state.lotto.lottoList;
export const selectMyStatisticsAppDesc = (state: RootState) =>
  state.lotto.statisticsAppDesc;
export const selectMyStatisticsMumDesc = (state: RootState) =>
  state.lotto.statisticsNumDesc;
export const selectAnalyzeNumber = (state: RootState) => state.lotto.suggestion;

export default lottoSlice.reducer;
