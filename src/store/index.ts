import { configureStore } from '@reduxjs/toolkit';
import themeMode from './themeMode';
const isDev = process.env.NODE_ENV !== 'production';

export const store = configureStore({
  reducer: {
    theme: themeMode,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
