import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user: null,
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state, action) => {
			state.user = null;
		},
	},
});

export const { login, logout } = userSlice.actions; //actions

export const selectUser = (state) => state.user.user; //state

export default userSlice.reducer; //reducer
