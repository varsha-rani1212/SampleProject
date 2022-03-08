import { createSlice } from "@reduxjs/toolkit";

const videoUrlSlice = createSlice({
    name: 'videoUrl',
    initialState: {url: ""},
    reducers: {
        setUrl(state, action){
            state.url = action.payload;
            console.log(state.url);
        },
    }
});

export const videoUrlActions = videoUrlSlice.actions;

export default videoUrlSlice;