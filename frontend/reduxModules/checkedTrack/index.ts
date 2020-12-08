import { TrackNode } from "../playQueue";
// State

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
  payload: TrackNode;
}

interface RemoveAction {
  type: typeof REMOVE;
  payload: TrackNode;
}

interface AllPushAction {
  type: typeof ALLPUSH;
  payload: TrackNode[];
}

export type CheckedTrackActionTypes = PushAction | RemoveAction | InitAction | AllPushAction;

// Action Creator
export const initCheckedTrack = (): InitAction => {
  return {
    type: INIT,
  };
};

export const pushCheckedTrack = (trackData: TrackNode): PushAction => {
  return {
    type: PUSH,
    payload: trackData,
  };
};

export const removeCheckedTrack = (trackData: TrackNode): RemoveAction => {
  return {
    type: REMOVE,
    payload: trackData,
  };
};

export const allPushCheckedTrack = (allTrackData: TrackNode[]): AllPushAction => {
  return {
    type: ALLPUSH,
    payload: allTrackData,
  };
};

// Reducer
const initialState: TrackNode[] = [];

const checkedTrackReducer = (
  state = initialState,
  action: CheckedTrackActionTypes,
): TrackNode[] => {
  switch (action.type) {
    case INIT:
      return initialState;

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
