
import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { addComment, fetchComments, removeComment, updateComment } from './commentsThunk';

interface Comment {
    id: string;
    comment: string;
    email: string;
    createdAt: string;
    updatedAt: string;
}

interface IError {
    message: string;
    code: string;
    status: number;
}

// Define a type for the slice state
interface CommentsState {
  comments: Comment[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed',
  error: IError | null,
}

// Define the initial state using that type
const initialState: CommentsState = {
  comments: [],
  status: 'idle',
  error: null,
}

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
  
  },
  extraReducers: (builder) => {
    builder
        .addCase(fetchComments.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(fetchComments.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.comments = action.payload;
        })
        .addCase(fetchComments.rejected, (state, action) => {
            console.log("🚀 ~ .addCase ~ action:", action)
            state.status = 'failed';
            const errors = action.payload as IError;
            state.error = {
                message: errors.message,
                code: errors.code,
                status: errors.status,
            };
        })
        
    builder
        .addCase(addComment.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(addComment.fulfilled, (state, action) => {
            console.log("🚀 ~ .addCase ~ action:", action.payload)
            state.status = 'succeeded';
            state.comments.push(action.payload);
        })
        .addCase(addComment.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload as IError;
        })

    builder
        .addCase(removeComment.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(removeComment.fulfilled, (state, action) => {
            console.log("🚀 ~ .addCase ~ action:", action.payload)
            state.status = 'succeeded';
            state.comments = state.comments.filter((comment) => comment.id !== action.payload)
        })
        .addCase(removeComment.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload as IError;
        })

    builder
        .addCase(updateComment.pending, (state) => {
            state.status = 'loading';
            state.error = null;
        })
        .addCase(updateComment.fulfilled, (state, action) => {
            console.log("🚀 ~ .addCase ~ action:", action.payload)
            state.status = 'succeeded';
            state.comments = state.comments.map((comment) => 
                comment.id === action.payload.id ? { ...comment, ...action.payload } : comment
            );
        })
        .addCase(updateComment.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload as IError;
        })

  }
})

export const {  } = commentsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectComments = (state: RootState) => state.comments

export default commentsSlice.reducer