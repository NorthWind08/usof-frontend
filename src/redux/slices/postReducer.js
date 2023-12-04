import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchPost = createAsyncThunk(
    'post/fetchPost',
    async (params) => {
        const {id} = params;
        const {data} = await axios.get(`/posts/${id}`);
        return data;
    });

export const fetchCreatePost = createAsyncThunk(
    'post/fetchCreatePost',
    async (params) => {
        const {data} = await axios.post('/posts/', params);
        return data;
    });

export const fetchComments = createAsyncThunk(
    'post/fetchComments',
    async (params) => {
        const {id} = params;
        const {data} = await axios.get(`/posts/${id}/comments`);
        return data;
    }
);

const initialState = {
    post: {
        data: null,
        status: 'loading'
    },
    comments: {
        counts: null,
        rows: []
    }
};

const postSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPost.fulfilled, (state, action) => {
            state.post.data = action.payload;
            state.status = 'loaded';
        });
        builder.addCase(fetchComments.fulfilled, (state, action) => {
            state.comments = action.payload;
            state.status = 'loaded';
        });
    }
});

export const postReducer = postSlice.reducer;