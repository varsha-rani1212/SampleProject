import { createSlice } from "@reduxjs/toolkit";

const showHideIconSlice = createSlice({
    name: 'headingofpage',
    initialState: {mainPage: true, uploadVideo: false, allVideos: false, uploadedVideos: false, favouriteVideos: false},
    reducers:{
        setMainPage(state){
            state.mainPage = true;
            state.uploadVideo = false;
            state.allVideos = false;
            state.uploadedVideos = false;
            state.favouriteVideos = false;
        },
        setUploadVideos(state){
            state.mainPage = false;
            state.uploadVideo = true;
            state.allVideos = false;
            state.uploadedVideos = false;
            state.favouriteVideos = false;
        },
        setAllVideos(state){
            state.mainPage = false;
            state.uploadVideo = false;
            state.allVideos = true;
            state.uploadedVideos = false;
            state.favouriteVideos = false;
        },
        setUploadedVideos(state){
            state.mainPage = false;
            state.uploadVideo = false;
            state.allVideos = false;
            state.uploadedVideos = true;
            state.favouriteVideos = false;
        },
        setFavouriteVideos(state){
            state.mainPage = false;
            state.uploadVideo = false;
            state.allVideos = false;
            state.uploadedVideos = false;
            state.favouriteVideos = true;
        },
    }
});

export const showHideIconActions = showHideIconSlice.actions;

export default showHideIconSlice;