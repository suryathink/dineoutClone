import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes";

// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return { ...state, isAuth: true, token: payload ,isLoading: false };

    case LOGIN_REQUEST:
      return { ...state, isLoading: payload };
    case LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        token: "",
        isLoading: false,
        isError: true,
      };

    // return { ...state, isAuth: true, token: payload };
   
  }
  // sLoading: false,
  // isError: false,
  return state;
};

export { reducer };
