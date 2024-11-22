import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../Urls";
import { IComment } from "../../../interfaces/Comment";


export const fetchComments = createAsyncThunk('comments/all',
    
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`${BASE_URL}api/comments/all`);
            return response.data
        } catch (error) {

            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue({
                    message: 'Something went wrong, comments won\'t be shown.',
                    status: error.status,
                    code: error.code
                });
            } else {
                return thunkAPI.rejectWithValue({
                    message: 'Something went wrong',
                    status: 500,
                    code: 'Internal Server Error'
                });
            }
        }
},)


export const addComment = createAsyncThunk('comments/add',

    async ({ comment, email }: IComment, thunkAPI) => {
    try {
        const response = await axios.post(`${BASE_URL}api/comments/add`, {
            comment,
            email,
        });
        return response.data
    } catch (error) {
        // return thunkAPI.rejectWithValue(error);
        if (axios.isAxiosError(error)) {
            return thunkAPI.rejectWithValue({
                message: 'Something went wrong, comments won\'t be shown.',
                status: error.status,
                code: error.code
            });
        } else {
            return thunkAPI.rejectWithValue({
                message: 'Something went wrong',
                status: 500,
                code: 'Internal Server Error'
            });
        }
    }
},)

export const removeComment = createAsyncThunk('comments/delete',

    async (id: string, thunkAPI) => {
    try {
        const response = await axios.delete(`${BASE_URL}api/comments/delete/${id}`);
        return response.data
    } catch (error) {
        // return thunkAPI.rejectWithValue(error);
        if (axios.isAxiosError(error)) {
            return thunkAPI.rejectWithValue({
                message: 'Something went wrong, comments won\'t be shown.',
                status: error.status,
                code: error.code
            });
        } else {
            return thunkAPI.rejectWithValue({
                message: 'Something went wrong',
                status: 500,
                code: 'Internal Server Error'
            });
        }
    }
},)

export const updateComment = createAsyncThunk('comments/update',

    async ({id, comment, email}: IComment, thunkAPI) => {
    try {
        const response = await axios.put(`${BASE_URL}api/comments/update/${id}`,{
            comment,
            email
        });
        return response.data
    } catch (error) {
        // return thunkAPI.rejectWithValue(error);
        if (axios.isAxiosError(error)) {
            return thunkAPI.rejectWithValue({
                message: 'Something went wrong, comments won\'t be shown.',
                status: error.status,
                code: error.code
            });
        } else {
            return thunkAPI.rejectWithValue({
                message: 'Something went wrong',
                status: 500,
                code: 'Internal Server Error'
            });
        }
    }
},)