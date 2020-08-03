import { ADD_GAP, REMOVE_GAP } from "./actionsTypes";

const dispatchActicleGap = (action) => (dispatch) => {
  switch (action) {
    case ADD_GAP:
      dispatch({ type: ADD_GAP });
      break;
    case REMOVE_GAP:
      dispatch({ type: REMOVE_GAP });
      break;

    default:
      break;
  }
};

export { dispatchActicleGap };
