import {GET_RES_DATA_REQUEST,GET_RES_DATA_SUCCESS, GET_RES_DATA_FAILURE} from "./actionType";

const appThunkActionCreator = (url) => {
console.log(url);
    return function appThunk(dispatch, getState) {
        dispatch({
            type:GET_RES_DATA_REQUEST,
            payload: true,
        });
        fetch(url)
        .then((res)=> res.json())
        .then((resData) =>{
         console.log("aaaa",resData);
           
         if (resData) {
            
            dispatch({
              type: GET_RES_DATA_SUCCESS,
              payload: resData,
            });
          } else {
            dispatch({
              type: GET_RES_DATA_FAILURE,
              payload: true,
            });
          }

        }).catch((e) => {
        console.log(e);
      });
    }
}
export {appThunkActionCreator};