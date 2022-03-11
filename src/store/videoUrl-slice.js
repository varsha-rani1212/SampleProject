import { createSlice } from "@reduxjs/toolkit";

const videoUrlSlice = createSlice({
    name: 'videoUrl',
    initialState: {url: "", title: "", date: ""},
    reducers: {
        setUrl(state, action){
            state.url = action.payload;
        },
        setTitle(state, action){
            state.title = action.payload;
        },
        setDate(state, action){
            state.date = action.date;
        },
    }
});

export const videoUrlActions = videoUrlSlice.actions;

export default videoUrlSlice;