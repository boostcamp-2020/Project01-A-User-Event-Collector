import { Album, Artist } from "../../interfaces";

// State
export interface CheckedTrack {
  id: number;
  trackName: string;
  Albums: Album;
  Artists: Artist[];
}

// Actions
export const PUSH = "checkedTrack/PUSH";
export const REMOVE = "checkedTrack/Remove";
export const INIT = "checkedTrack/INIT";

interface InitAction {
  type: typeof INIT;
}

interface PushAction {
  type: typeof PUSH;
  payload: CheckedTrack;
}

interface RemoveAction {
  type: typeof REMOVE;
  payload: CheckedTrack;
}
export type CheckedTrackActionTypes = PushAction | RemoveAction | InitAction;

// Action Creator
export const initCheckedTrack = (): InitAction => {
  return {
    type: INIT,
  };
};

export const pushCheckedTrack = (trackData: CheckedTrack): PushAction => {
  return {
    type: PUSH,
    payload: trackData,
  };
};

export const removeCheckedTrack = (trackData: CheckedTrack): RemoveAction => {
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
