import { createSlice } from "@reduxjs/toolkit";

const addNotesVideoUrlSlice = createSlice({
    name: "addNotesVideoUrl",
    initialState: {url: ' '},
    reducers:{
        setVideoUrl(state, action){
            state.url = action.payload;
        },
    }
});

export const addNotesVideoUrlActions = addNotesVideoUrlSlice.actions;

export default addNotesVideoUrlSlice;