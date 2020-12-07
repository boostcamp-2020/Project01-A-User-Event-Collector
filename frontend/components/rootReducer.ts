import { combineReducers } from "@reduxjs/toolkit";
import checkedTrackReducer from "./Tracklist/CheckedTrackReducer";

const rootReducer = combineReducers({
  checkedTrackReducer,
});

export default rootReducer;

// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof rootReducer>;
