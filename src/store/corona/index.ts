import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';

// Define a type for the slice state
export interface coronaDataType {
  CORONA19_AREA: string;
  CORONA19_CONTACT_HISTORY: string;
  CORONA19_CORRECTIVE: string;
  CORONA19_COUNTRY: string;
  CORONA19_DATE: string;
  CORONA19_ID: string;
  CORONA19_IDATE: string;
  CORONA19_LEAVE_STATUS: string;
  CORONA19_MOVING_PATH: string;
  CORONA19_NO: string;
  CORONA19_PERSONAL: string;
  CORONA19_TRAVEL_HISTORY: string;
}
type IState = {
  corona: coronaDataType[];
  message: string;
  index: number;
};
// Define the initial state using that type
const initialState: IState = {
  corona: [],
  message: '',
  index: 1,
};

interface IError {
  message: string;
}

export const corona = createSlice({
  name: 'corona',
  initialState,
  reducers: {
    SUSSESS_CORONA: (state, action: PayloadAction<coronaDataType[]>) => {
      const concatList = state.corona.concat(action.payload);
      state.corona = concatList;
      state.index = state.index + 1000;
    },
    FAIL_CORONA: (state, action: PayloadAction<IError>) => {
      state.message = action.payload.message;
    },
  },
});

export const { SUSSESS_CORONA, FAIL_CORONA } = corona.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCoronaMembers = (state: RootState) => state.corona;

export default corona.reducer;
