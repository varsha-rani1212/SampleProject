import { createSlice } from "@reduxjs/toolkit";

const userDataSlice = createSlice({
    name: 'userData',
    initialState: {userData: [], googleData: {}, userInfo: {}, flag: 0},
    reducers: {
        setUserData(state, action){
            state.userData = action.payload;
        },
        setGoogleData(state, action){
            state.googleData = action.payload;
            state.flag = 1;
        },
        setUserInfo(state, action){
            state.userInfo = action.payload;
        }
    }
});

export const userDataActions = userDataSlice.actions;

export default userDataSlice;