import { combineReducers } from "redux";
import checkedTrackReducer from "./checkedTrack";
import allCheckedReducer from "./allCheck";

export const rootReducer = combineReducers({
  checkedTrack: checkedTrackReducer,
  AllCheckedFlag: allCheckedReducer,
});

// eslint-disable-next-line no-undef
export type RootState = ReturnType<typeof rootReducer>;
