import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';
import rootSaga from './saga';
import themeMode from './themeMode';
import corona from './corona';
import toggle from './toggle';
import lotto from './lotto';
const isDev = process.env.NODE_ENV !== 'production';
const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const store = configureStore({
    reducer: {
      theme: themeMode,
      corona: corona,
      toggle: toggle,
      lotto: lotto,
    },
    devTools: isDev,
    middleware: [sagaMiddleware],
  });
  sagaMiddleware.run(rootSaga);
  return store;
};
export const store = createStore();
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
