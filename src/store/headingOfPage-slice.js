import { createSlice } from "@reduxjs/toolkit";

const headingOfPageSlice = createSlice({
    name: 'headingofpage',
    initialState: {heading: ''},
    reducers:{
        setHeading(state,action){
            state.heading = action.payload;
        },
    }
});

export const headingOfPageActions = headingOfPageSlice.actions;

export default headingOfPageSlice;