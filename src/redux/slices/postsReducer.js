import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "../../axios";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (params) => {
        console.log(params)
        const {data} = await axios.get('/posts/', params);
        return data;
    });

const initialState = {
    posts: {
        data: null,
        status: 'loading'
    }
};

const postsSlice = createSlice({
    name: 'posts',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = 'loaded';
        });
    }
});

export const postsReducer = postsSlice.reducer;