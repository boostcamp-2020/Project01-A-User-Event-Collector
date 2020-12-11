import { Track } from "../../interfaces";

// Actions
export const PUSH = "playQueue/PUSH";
export const REMOVE = "playQueue/REMOVE";
export const INIT = "playQueue/INIT";
export const ALLPUSH = "playQueue/ALLPUSH";

interface InitAction {
  type: typeof INIT;
}

interface PushAction {
  type: typeof PUSH;
  payload: Track;
}

interface RemoveAction {
  type: typeof REMOVE;
  payload: Track;
}

interface AllPushAction {
  type: typeof ALLPUSH;
  payload: Track[];
}

export type PlayQueueActionTypes = InitAction | PushAction | RemoveAction | AllPushAction;

// Action Creator
export const initPlayQueue = (): InitAction => {
  return {
    type: INIT,
  };
};

export const pushPlayQueue = (track: Track): PushAction => {
  return {
    type: PUSH,
    payload: track,
  };
};

export const removePlayQueue = (track: Track): RemoveAction => {
  return {
    type: REMOVE,
    payload: track,
  };
};

export const allPushPlayQueue = (trackList: Track[]): AllPushAction => {
  return {
    type: ALLPUSH,
    payload: trackList,
  };
};

// Reducer
const initialState: Track[] = [];

const playQueueReducer = (state = initialState, action: PlayQueueActionTypes): Track[] => {
  switch (action.type) {
    case INIT:
      return initialState;

    case PUSH:
      return [...state, action.payload];

    case REMOVE:
      return state.filter((elem) => elem.id !== action.payload.id);

    case ALLPUSH:
      return [...state, ...action.payload];

    default:
      return state;
  }
};

export default playQueueReducer;
