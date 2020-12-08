import { combineReducers } from "redux";
import checkedTrackReducer from "./checkedTrack";

export const rootReducer = combineReducers({
  checkedTrackReducer,
});

// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof rootReducer>;
