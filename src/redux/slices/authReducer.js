import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from '../../axios';

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
    const {data} = await axios.post('/auth/login', params);
    return data;
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuth', async () => {
    const {data} = await  axios.get('/auth/me');
    return data;
});

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
    const {data} = await axios.post('/auth/register', params);
    return data;
});

export const fetchVerify = createAsyncThunk('auth/fetchVerify', async (params) => {
    const {data} = await axios.post('/auth/verify', params);
    return data;
});

const initialState = {
    data: null,
    status: 'loading',
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        logout: (state) => {
            state.data = null;
        },
    },
    extraReducers: {
        [fetchAuth.pending]: (state) => {
            state.status = "loading";
            state.data = null;
        },
        [fetchAuth.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.data = action.payload;
        },
        [fetchAuth.rejected]: (state) => {
            state.status = "error";
            state.data = null;
        },
        [fetchAuthMe.pending]: (state) => {
            state.status = "loading";
            state.data = null;
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.data = action.payload;
        },
        [fetchAuthMe.rejected]: (state) => {
            state.status = "error";
            state.data = null;
        },
        [fetchRegister.pending]: (state) => {
            state.status = "loading";
            state.data = null;
        },
        [fetchRegister.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.data = action.payload;
        },
        [fetchRegister.rejected]: (state) => {
            state.status = "error";
            state.data = null;
        },
        [fetchVerify.pending]: (state) => {
            state.status = "loading";
            state.data = null;
        },
        [fetchVerify.fulfilled]: (state, action) => {
            state.status = "loaded";
            state.data = action.payload;
        },
        [fetchVerify.rejected]: (state) => {
            state.status = "error";
            state.data = null;
        },
    },
});

export const authReducer = authSlice.reducer;

export const selectIsAuth = (state) => Boolean(state.auth.data);
export const selectUserData = (state) => state.auth.data;
export const {logout} = authSlice.actions;