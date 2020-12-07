import { Album, Artist } from "../../../interfaces";

// State
export interface CheckedTrack {
  id: number;
  trackName: string;
  Album: Album;
  Artists: Artist[];
}

// Actions
export const PUSH = "checkedTrack/PUSH";
export const REMOVE = "checkedTrack/Remove";

interface PushAction {
  type: typeof PUSH;
  payload: CheckedTrack;
}

interface RemoveAction {
  type: typeof REMOVE;
  payload: CheckedTrack;
}
export type CheckedTrackActionTypes = PushAction | RemoveAction;

// Action Creator
export const pushTrack = (trackData: CheckedTrack): PushAction => {
  return {
    type: PUSH,
    payload: trackData,
  };
};

export const removeTrack = (trackData: CheckedTrack): RemoveAction => {
  return {
    type: REMOVE,
    payload: trackData,
  };
};

// Reducer
const initialCheckedTrackArr: CheckedTrack[] = [];
const checkedTrackReducer = (
  state = initialCheckedTrackArr,
  action: CheckedTrackActionTypes,
): CheckedTrack[] => {
  switch (action.type) {
    case PUSH:
      return [...state, action.payload];

    case REMOVE:
      return state.filter((elem) => elem !== action.payload);

    default:
      return state;
  }
};

export default checkedTrackReducer;
