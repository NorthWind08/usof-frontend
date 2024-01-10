import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchCreateComment = createAsyncThunk(
    'comment/fetchCreateComment',
    async (params) => {
        console.log(params);
        const {id, ...body} = params;
        const {data} = axios.post(`/posts/${id}/comments`, body);
        return data;
    }
);

const initialState = {
    data: null,
    status: 'loading'
};

const commentSlice = createSlice({
    name: 'comments',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCreateComment.fulfilled, (state, action) => {
            state.status = 'loaded';
        });
    }
});

export const commentReducer = commentSlice.reducer;