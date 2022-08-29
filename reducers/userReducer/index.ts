import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IUser {
    firstName: String;
    lastName: String;
    token: String;
    avatar: String;
}

const inititalUser: IUser | {} = {};

const userSlice = createSlice({
    name: 'user',
    initialState: inititalUser,
    reducers: {}
});

// export const { } = userSlice.actions; 
export default userSlice.reducer;