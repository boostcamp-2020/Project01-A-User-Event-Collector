import { Album, Artist } from "../../interfaces";

// State
export interface CheckedTrack {
  id: number;
  trackName: string;
  Albums: Album;
  Artists: Artist[];
}

export interface CheckedState {
  checkedTrackArr: CheckedTrack[];
  isAllChecked: boolean;
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
const initialState: CheckedState = {
  checkedTrackArr: [],
  isAllChecked: false,
};
const checkedTrackReducer = (
  state = initialState,
  action: CheckedTrackActionTypes,
): CheckedState => {
  const { checkedTrackArr, isAllChecked } = state;

  switch (action.type) {
    case INIT:
      return {
        checkedTrackArr: [],
        isAllChecked: false,
      };

    case PUSH:
      return {
        checkedTrackArr: [...checkedTrackArr, action.payload],
        isAllChecked: false,
      };

    case REMOVE:
      return {
        checkedTrackArr: checkedTrackArr.filter((elem) => elem !== action.payload),
        isAllChecked: false,
      };

    default:
      return state;
  }
};

export default checkedTrackReducer;
