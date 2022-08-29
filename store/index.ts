import { configureStore } from '@reduxjs/toolkit'; 
import postsReducer from '../reducers/postsReducer';
import userReducer from '../reducers/userReducer';

export const twitterStore = configureStore({
    reducer: {
        posts: postsReducer,
        user: userReducer
    }
});

export type RootState = ReturnType<typeof twitterStore.getState>;
export type AppDispatch = typeof twitterStore.dispatch;

