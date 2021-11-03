import createSagaMiddleware from '@redux-saga/core';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootSaga from './saga';
import themeMode from './themeMode';
import userLog from './userLog';
const isDev = process.env.NODE_ENV !== 'production';
const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const store = configureStore({
    reducer: {
      theme: themeMode,
      userLog: userLog,
    },
    devTools: isDev,
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
export const store = createStore();
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
