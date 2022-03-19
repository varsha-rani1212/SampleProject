import { configureStore } from "@reduxjs/toolkit";

import signupSlice from "./signup-slice";
import userDataSlice from "./userData-slice";
import videoUrlSlice from "./videoUrl-slice";
import addNotesVideoUrlSlice from "./addNotesVideoUrl-slice";

const store = configureStore({
  reducer: {
    signup: signupSlice.reducer,
    userData: userDataSlice.reducer,
    videoUrl: videoUrlSlice.reducer,
    addNotesVideoUrl: addNotesVideoUrlSlice.reducer,
  },
});

export default store;
