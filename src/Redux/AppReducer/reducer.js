// NOTE: DO NOT MODIFY the intial state structure in this file.
import {
  GET_RES_DATA_REQUEST,
  GET_RES_DATA_SUCCESS,
  GET_RES_DATA_FAILURE,
} from "./actionType";
const initialState = {
  restaurants: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_RES_DATA_SUCCESS:
      return { ...state, restaurants: payload, isLoading: false };

    case GET_RES_DATA_REQUEST:
      return { ...state, isLoading: payload };
    case GET_RES_DATA_FAILURE:
      return { ...state, isError: payload };
    default:
      return state;
  }
};

export { reducer };
