import { ADD_GAP, REMOVE_GAP } from "./actionsTypes";

const gapReducer = (state = { value: 0 }, action) => {
  switch (action.type) {
    case ADD_GAP:
      return {
        ...state,
        value: state.value - 354,
      };

    case REMOVE_GAP:
      return {
        ...state,
        value: state.value + 354,
      };

    default:
      return state;
  }
};

export default gapReducer;
