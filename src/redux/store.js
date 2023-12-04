import {configureStore} from '@reduxjs/toolkit';

import {authReducer} from "./slices/authReducer";
import {commentReducer} from "./slices/commentReducer";
import {postReducer} from "./slices/postReducer";
import {postsReducer} from "./slices/postsReducer";
import {usersReducer} from "./slices/usersReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        comment: commentReducer,
        post: postReducer,
        posts: postsReducer,
        users: usersReducer
    }
});

export default store;