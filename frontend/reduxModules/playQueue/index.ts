import { Track } from "../../interfaces";

// Actions
export const CONCATENATE = "playQueue/CONCATENATE";
export const REMOVE = "playQueue/REMOVE";
export const INIT = "playQueue/INIT";

interface InitAction {
  type: typeof INIT;
}

interface ConcatenateAction {
  type: typeof CONCATENATE;
  payload: Set<Track>;
}

interface RemoveAction {
  type: typeof REMOVE;
  payload: Track;
}

export type PlayQueueActionTypes = InitAction | ConcatenateAction | RemoveAction;

// Action Creator
export const initPlayQueue = (): InitAction => {
  return {
    type: INIT,
  };
};

export const concatenatePlayQueue = (tracks: Set<Track>): ConcatenateAction => {
  return {
    type: CONCATENATE,
    payload: tracks,
  };
};

export const removePlayQueue = (track: Track): RemoveAction => {
  return {
    type: REMOVE,
    payload: track,
  };
};

// Reducer
const initialState: Track[] = [];

const playQueueReducer = (state = initialState, action: PlayQueueActionTypes): Track[] => {
  switch (action.type) {
    case INIT:
      return initialState;

    case CONCATENATE:
      return state.concat([...action.payload]);

    case REMOVE:
      return state.filter((track) => track.id !== action.payload.id);

    default:
      return state;
  }
};

export default playQueueReducer;
