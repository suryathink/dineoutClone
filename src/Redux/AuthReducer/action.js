//Write the ActionCreator functions here

import { LOGIN_FAILURE, LOGIN_SUCCESS,LOGIN_REQUEST } from "./actionTypes";


const loginThunkActionCreator = (data) => {
  return function loginThunk(dispatch, getState) {
    dispatch({
      type: LOGIN_REQUEST,
      payload: true,
    });
    fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        if (resData.token) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: resData.token,
          });
        } else {
          dispatch({
            type: LOGIN_FAILURE,
            payload: "",
          });
        }
      })

      .catch((e) => {
        console.log(e);
      });
  };
};

// return { ...state, isAuth: true, token: payload };
export { loginThunkActionCreator };
