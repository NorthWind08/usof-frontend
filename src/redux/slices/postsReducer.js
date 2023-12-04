import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "../../axios";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        const {data} = await axios.get('posts/');
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
            state.posts.data = action.payload;
            state.status = 'loaded';
        });
    }
});

export const postsReducer = postsSlice.reducer;