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
  url: string;
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
  top5List: number[];
  notExistList: number[];
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
  top5List: [],
  notExistList: [],
};

interface IPayLoadLottoState {
  round: number;
  myLottoList: number[][];
  url: string;
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
      const { myLottoList, round, url } = action.payload;
      const obj = { round, myLottoList, url };
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
      const top5List = makeTop5List(NumDesc);

      state.top5List = top5List;
      const notExistList = makeNotExistList(AppDesc);

      state.notExistList = notExistList;
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
    LOTTOTOASTCLOSE: (state) => {
      state.toast = false;
    },
    LOTTORECOMMEND: (state) => {
      const { lottoList, statisticsNumDesc, notExistList, top5List } = state;
      let check = true;
      let checkList: number[][] = [];
      while (check) {
        const topRandomNumber = makeTopRandomNumber(lottoList, top5List);
        const existRandomNumber = makeExistRandomNumber(
          lottoList,
          statisticsNumDesc,
        );
        const notExistRandomNumber = makeNotExistRandomNumber(
          lottoList,
          notExistList,
        );
        const randomNumber1 = makeRandomNumber(lottoList);
        const randomNumber2 = makeRandomNumber(lottoList);
        checkList = [
          topRandomNumber,
          existRandomNumber,
          notExistRandomNumber,
          randomNumber1,
          randomNumber2,
        ];

        const checkArr = checkList.map(
          (data) =>
            checkList.filter(
              (filterdata) =>
                JSON.stringify(data) === JSON.stringify(filterdata),
            ).length > 1,
        );
        check = checkArr.some((data) => data === true);
      }
      state.recommendList = checkList;
      //final check
    },
  },
});

const makeTop5List = (statisticsNumDesc: statisticsType[]) => {
  const maxCount = 5;

  let countAppearance = statisticsNumDesc[0].appearance;
  let top5List: number[] = [];
  while (top5List.length < maxCount) {
    const countNum = statisticsNumDesc.filter(
      (data) => countAppearance === data.appearance,
    );

    countAppearance--;
    countNum.forEach((data) => {
      top5List.push(data.num);
    });
  }
  return top5List;
};
const makeNotExistList = (statisticsAppDesc: statisticsType[]) => {
  const arr = new Array(45).fill(0);
  const initLottoNumArr = arr.map((data, i) => i + 1);
  const existArr = statisticsAppDesc
    .filter((data) => data.appearance !== 0)
    .map((data) => data.num);

  return initLottoNumArr.filter((Idata) => {
    let check = existArr.filter((Edata) => Edata === Idata).length === 0;

    return check;
  });
};

const makeTopRandomNumber = (lottoList: myLottoList[], top5List: number[]) => {
  const listLength = top5List.length;
  const maxLength = 6;
  const maxNumber = 45;
  const useUnit = Math.floor(listLength * Math.random() + 1);
  let pass = true;
  let arrs: number[] = [];
  while (pass) {
    arrs = [];
    for (let i = 0; i < maxLength; i++) {
      let choiseNumber = 0;
      const randomPopNumber = Math.floor(listLength * Math.random());
      if (i < useUnit) {
        choiseNumber = top5List[randomPopNumber];
      } else {
        choiseNumber = Math.floor(maxNumber * Math.random() + 1);
      }
      arrs.some((data) => data === choiseNumber)
        ? i--
        : arrs.push(choiseNumber);
    }
    arrs.sort((a, b) => a - b);
    pass = !deduplicationFunc(lottoList, arrs);
  }
  return arrs;
};
const makeExistRandomNumber = (
  lottoList: myLottoList[],
  statisticsNumDesc: statisticsType[],
) => {
  const listLength = statisticsNumDesc.length;
  const maxLength = 6;
  const maxNumber = 45;
  const useUnit = Math.floor(listLength * Math.random() + 1);
  let pass = true;
  let arrs: number[] = [];
  while (pass) {
    arrs = [];
    for (let i = 0; i < maxLength; i++) {
      let choiseNumber = 0;
      const randomPopNumber = Math.floor(listLength * Math.random());
      if (i < useUnit) {
        choiseNumber = statisticsNumDesc[randomPopNumber].num;
      } else {
        choiseNumber = Math.floor(maxNumber * Math.random() + 1);
      }
      arrs.some((data) => data === choiseNumber)
        ? i--
        : arrs.push(choiseNumber);
    }
    arrs.sort((a, b) => a - b);
    pass = !deduplicationFunc(lottoList, arrs);
  }
  return arrs;
};
const makeNotExistRandomNumber = (
  lottoList: myLottoList[],
  notExistList: number[],
) => {
  const listLength = notExistList.length;
  const maxLength = 6;
  const maxNumber = 45;
  const useUnit = Math.floor(listLength * Math.random() + 1);
  let pass = true;
  let arrs: number[] = [];
  while (pass) {
    arrs = [];
    for (let i = 0; i < maxLength; i++) {
      let choiseNumber = 0;
      const randomPopNumber = Math.floor(listLength * Math.random());
      if (i < useUnit) {
        choiseNumber = notExistList[randomPopNumber];
      } else {
        choiseNumber = Math.floor(maxNumber * Math.random() + 1);
      }
      arrs.some((data) => data === choiseNumber)
        ? i--
        : arrs.push(choiseNumber);
    }
    arrs.sort((a, b) => a - b);
    pass = !deduplicationFunc(lottoList, arrs);
  }
  return arrs;
};
const makeRandomNumber = (lottoList: myLottoList[]) => {
  const maxLength = 6;
  const maxNumber = 45;
  let pass = true;
  let arrs: number[] = [];
  while (pass) {
    arrs = [];
    for (let i = 0; i < maxLength; i++) {
      let choiseNumber = 0;
      choiseNumber = Math.floor(maxNumber * Math.random() + 1);
      arrs.some((data) => data === choiseNumber)
        ? i--
        : arrs.push(choiseNumber);
    }
    arrs.sort((a, b) => a - b);
    pass = !deduplicationFunc(lottoList, arrs);
  }
  return arrs;
};

const deduplicationFunc = (lottoList: myLottoList[], testList: number[]) => {
  let pass = true;

  lottoList.forEach(
    (data) =>
      (pass =
        data.myLottoList.filter((myLotto) => myLotto === testList).length > 0
          ? false
          : pass),
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
  LOTTORECOMMEND,
} = lottoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectMyNumber = (state: RootState) => state.lotto.lottoList;
export const selectMyStatisticsAppDesc = (state: RootState) =>
  state.lotto.statisticsAppDesc;
export const selectMyStatisticsMumDesc = (state: RootState) =>
  state.lotto.statisticsNumDesc;
export const selectAnalyzeNumber = (state: RootState) => state.lotto.suggestion;

export default lottoSlice.reducer;
