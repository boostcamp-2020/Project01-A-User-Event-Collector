import { Album, Artist } from "../../interfaces";

// State
export interface TrackNode {
  id: number;
  trackName: string;
  Albums: Album;
  Artists: Artist[];
}

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

export type PlayQueueActionTypes = InitAction | PushAction | RemoveAction | AllPushAction;

// Action Creator
export const initPlayQueue = (): InitAction => {
  return {
    type: INIT,
  };
};

export const pushPlayQueue = (trackNode: TrackNode): PushAction => {
  return {
    type: PUSH,
    payload: trackNode,
  };
};

export const removePlayQueue = (trackNode: TrackNode): RemoveAction => {
  return {
    type: REMOVE,
    payload: trackNode,
  };
};

export const allPushPlayQueue = (trackNodeList: TrackNode[]): AllPushAction => {
  return {
    type: ALLPUSH,
    payload: trackNodeList,
  };
};

// Reducer
const initialState: TrackNode[] = [];

const playQueueReducer = (state = initialState, action: PlayQueueActionTypes): TrackNode[] => {
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
