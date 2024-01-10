import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from '../../axios';

export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async (params) => {
        const {id} = params;
        const {data} = await axios.get(`/users/${id}`);
        return data;
    }
);

const initialState = {
    users: null
};

const usersSlice = createSlice({
   name: 'users',
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
       builder.addCase(fetchUser.fulfilled, (state, action) => {
           state.users = action.payload;
           // state.users.status = 'loaded';
       })
   }
});

export const usersReducer = usersSlice.reducer;