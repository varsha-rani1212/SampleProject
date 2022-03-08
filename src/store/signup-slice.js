import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
    name: 'signup',
    initialState: {id: '', firstName: '', lastName:'', date: '',  email: '', password: ''},
    reducers:{
        setFirstName(state, action){
            state.firstName = action.payload;
        },
        setLastName(state, action){
            state.lastName = action.payload;
        },
        setDate(state, action){
            state.date = action.payload;
        },
        setEmail(state, action){
            state.id = action.payload;
            state.email = action.payload;
        },
        setPassword(state, action){
            state.password = action.payload;
        },
    }
});

export const signupActions = signupSlice.actions;

export default signupSlice;