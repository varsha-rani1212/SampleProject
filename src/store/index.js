import { configureStore } from "@reduxjs/toolkit";

import signupSlice from "./signup-slice";
import userDataSlice from "./userData-slice";
import videoUrlSlice from "./videoUrl-slice";
import addNotesVideoUrlSlice from "./addNotesVideoUrl-slice";
import headingOfPageSlice from "./headingOfPage-slice";
import showHideIconSlice from "./showHideIcon-slice";

const store = configureStore({
  reducer: {
    signup: signupSlice.reducer,
    userData: userDataSlice.reducer,
    videoUrl: videoUrlSlice.reducer,
    addNotesVideoUrl: addNotesVideoUrlSlice.reducer,
    addHeadingOfPage: headingOfPageSlice.reducer,
    showHideIcon: showHideIconSlice.reducer,
  },
});

export default store;
