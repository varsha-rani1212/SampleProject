import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: 'userData',
    initialState: {userData: [], googleData: {}},
    reducers: {
        setUserData(state, action){
            state.userData = action.payload;
            console.log(state.userData);
        },
        setGoogleData(state, action){
            state.googleData = action.payload;
        },
    }
});

export const userDataActions = userDataSlice.actions;

export default userDataSlice;