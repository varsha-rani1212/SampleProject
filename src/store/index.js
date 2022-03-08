import { configureStore } from "@reduxjs/toolkit";

import signupSlice from "./signup-slice";
import userDataSlice from "./userData-slice";
import videoUrlSlice from "./videoUrl-slice";

const store = configureStore({
    reducer: {signup : signupSlice.reducer, userData: userDataSlice.reducer, videoUrl: videoUrlSlice.reducer}
});

export default store;