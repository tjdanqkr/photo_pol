import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';

// Define a type for the slice state
export interface userLogType {
  action: String;
  time: String;
  log: String;
  img?: string;
}

// Define the initial state using that type
const initialState: userLogType[] = [
  {
    action: 'webOpen',
    time: new Date().toLocaleString(),
    log: '',
  },
];

export const userLogSlice = createSlice({
  name: 'userLog',
  initialState,
  reducers: {
    postUserLog: (state, action: PayloadAction<userLogType>) => {
      state.push(action.payload);
    },
  },
});

export const { postUserLog } = userLogSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectUserLog = (state: RootState) => state.userLog;

export default userLogSlice.reducer;
