import { AUTH} from 'constants/actionTypes'
import * as api from "api/api.js"
import { Navigate, useNavigate } from 'react-router-dom'

export const signin = (formData,history) => async (dispatch) => {
    try {
         // log in 
        Navigate("/")
    } catch (error) {
        console.log(error.message={error})
    }
}

export const signup = (formData, history) => async (dispatch) => {
  try {
    // log in
    Navigate("/");
  } catch (error) {
      console.log((error.message = { error }));
  }
};