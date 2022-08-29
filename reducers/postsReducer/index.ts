import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IPost {
    author: string, 
    creationDate: string, 
    post: string
}

const initialPosts: IPost[] = [];

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialPosts,
    reducers: {
        createPost(state, action: PayloadAction<IPost>) {
            state.push(action.payload);
        }
    }
});

export const { createPost } = postsSlice.actions; 
export default postsSlice.reducer;