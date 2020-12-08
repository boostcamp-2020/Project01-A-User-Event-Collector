import { Album, Artist } from "../../interfaces";

// State
export interface Node {
  id: number;
  trackName: string;
  Albums: Album;
  Aritsts: Artist[];
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
  payload: Node;
}

interface RemoveAction {
  type: typeof REMOVE;
  payload: Node;
}

interface AllPushAction {
  type: typeof ALLPUSH;
  payload: Node[];
}

export type PlayQueueActionTypes = InitAction | PushAction | RemoveAction | AllPushAction;

// Action Creator
export const initPlayQueue = (): InitAction => {
  return {
    type: INIT,
  };
};

export const pushPlayQueue = (trackNode: Node): PushAction => {
  return {
    type: PUSH,
    payload: trackNode,
  };
};

export const removePlayQueue = (trackNode: Node): RemoveAction => {
  return {
    type: REMOVE,
    payload: trackNode,
  };
};

export const allPushPlayQueue = (trackNodeList: Node[]): AllPushAction => {
  return {
    type: ALLPUSH,
    payload: trackNodeList,
  };
};

// Reducer
const initialState: Node[] = [];

const playQueueReducer = (state = initialState, action: PlayQueueActionTypes): Node[] => {
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

export default playQueueReducer;
