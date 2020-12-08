// State
export interface AllCheckedFlag {
  isAllChecked: boolean;
  prevent: boolean;
}

// Actions
// allCheck버튼이 origin이면 INACCESS
// 다른 버튼에 의해 발생했다면 EXACCESS
export const EXACCESS = "allChecked/EXTERNAL";
export const INACCESS = "allChecked/INTERNAL";

interface ExteranlAction {
  type: typeof EXACCESS;
  payload: AllCheckedFlag;
}

interface InternalAction {
  type: typeof INACCESS;
  payload: AllCheckedFlag;
}

export type FlagTypes = ExteranlAction | InternalAction;

// Action creator
export const preventEffect = (flagOption: AllCheckedFlag): ExteranlAction => {
  return {
    type: EXACCESS,
    payload: flagOption,
  };
};

export const permitEffect = (flagOption: AllCheckedFlag): InternalAction => {
  return {
    type: INACCESS,
    payload: flagOption,
  };
};

// Reducer
const initialFlag: AllCheckedFlag = {
  isAllChecked: false,
  prevent: false,
};

const allCheckedReducer = (state = initialFlag, action: FlagTypes): AllCheckedFlag => {
  switch (action.type) {
    case INACCESS:
      return action.payload;

    case EXACCESS:
      return action.payload;

    default:
      return state;
  }
};

export default allCheckedReducer;
