import { stat } from "fs";
import { Track } from "../../interfaces";

// State

// Actions
export const INIT = "checkedTrack/INIT";
export const ADD = "checkedTrack/ADD";
export const DELETE = "checkedTrack/DELETE";
export const EMPTY = "checkedTrack/EMPTY";
export const SET_ALLCHECKED = "checkedTrack/SET_ALL";
export const TOGGLE_ALLCHECKED = "checkedTrack/TOGGLE_ALL";

interface InitAction {
  type: typeof INIT;
}

interface AddAction {
  type: typeof ADD;
  payload: Track;
}

interface DeleteAction {
  type: typeof DELETE;
  payload: Track;
}

interface EmptyAction {
  type: typeof EMPTY;
}

interface ToggleAllCheckedAction {
  type: typeof TOGGLE_ALLCHECKED;
}

interface SetAllCheckedAction {
  type: typeof SET_ALLCHECKED;
  payload: boolean;
}

export type CheckedTrackActionTypes =
  | AddAction
  | DeleteAction
  | InitAction
  | EmptyAction
  | ToggleAllCheckedAction
  | SetAllCheckedAction;

// Action Creator
export const initCheckedTrack = (): InitAction => {
  return {
    type: INIT,
  };
};

export const addCheckedTrack = (trackData: Track): AddAction => {
  return {
    type: ADD,
    payload: trackData,
  };
};

export const deleteCheckedTrack = (trackData: Track): DeleteAction => {
  return {
    type: DELETE,
    payload: trackData,
  };
};

export const emptyCheckedTrack = (): EmptyAction => {
  return {
    type: EMPTY,
  };
};

export const toggleAllChecked = (): ToggleAllCheckedAction => {
  return {
    type: TOGGLE_ALLCHECKED,
  };
};

export const setAllChecked = (newAllChecked: boolean): SetAllCheckedAction => {
  return {
    type: SET_ALLCHECKED,
    payload: newAllChecked,
  };
};

// Reducer
const initialState: { allChecked: boolean; checkedTracks: Set<Track> } = {
  allChecked: false,
  checkedTracks: new Set(),
};

const checkedTrackReducer = (
  state = initialState,
  action: CheckedTrackActionTypes,
): { allChecked: boolean; checkedTracks: Set<Track> } => {
  switch (action.type) {
    case INIT:
      return { ...state, ...initialState };

    case ADD:
      return { ...state, checkedTracks: state.checkedTracks.add(action.payload) };

    case DELETE:
      state.checkedTracks.delete(action.payload);
      return { ...state };

    case EMPTY:
      return { ...state, checkedTracks: new Set() };

    case TOGGLE_ALLCHECKED:
      return { ...state, allChecked: !state.allChecked };

    case SET_ALLCHECKED:
      return { ...state, allChecked: action.payload };

    default:
      return state;
  }
};

export default checkedTrackReducer;
