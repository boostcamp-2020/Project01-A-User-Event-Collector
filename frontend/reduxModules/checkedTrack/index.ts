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
export const ALLPUSH = "checkedTrack/ALLPUSH";

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

interface AllPushAction {
  type: typeof ALLPUSH;
  payload: CheckedTrack[];
}

export type CheckedTrackActionTypes = PushAction | RemoveAction | InitAction | AllPushAction;

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

export const allPushTrack = (allTrackData: CheckedTrack[]): AllPushAction => {
  return {
    type: ALLPUSH,
    payload: allTrackData,
  };
};

// Reducer
const initialState: CheckedTrack[] = [];

const checkedTrackReducer = (
  state = initialState,
  action: CheckedTrackActionTypes,
): CheckedTrack[] => {
  switch (action.type) {
    case INIT:
      return [];

    case PUSH:
      return [...state, action.payload];

    case REMOVE:
      return state.filter((elem) => elem.id !== action.payload.id);

    case ALLPUSH:
      return [...action.payload];

    default:
      return state;
  }
};

export default checkedTrackReducer;
