import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    CLEAR_ERRORS,
} from "../constants/userConsts";

import axios from "../../axios";

//post request action
//1. login user
export const login = (email, password) => async(dispatch)=>{
    try {

        dispatch({type: LOGIN_REQUEST});

        const config = {
            headers: {
                "Content-Type": "application/json",
                }
        };

        const {data} = await axios.post(
                `/api/v1/login`,
                {email, password},
                config
        );

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data.user
        });           
        
    } catch (error) {
        dispatch({type: LOGIN_FAIL, payload: error.response.data.message});
    }
};


//2. create/register user
export const register = (userData) => async(dispatch)=>{
    try {

        // console.log(userData)

         dispatch({type: REGISTER_USER_REQUEST});

         const config = {headers: {"Content-Type": "application/json",
         "Access-Control-Allow-Origin": "*",
        }};

         const {data} = await axios.post(`/api/v1/register`,userData, config);

        //  console.log(data);

         dispatch({type: REGISTER_USER_SUCCESS, payload: data.user});
        
    } catch (error) {
        dispatch({type: REGISTER_USER_FAIL, payload: error.response.data.message});
    }
};


// clearing errors
export const clearErrors = () => async(dispatch)=> {
    dispatch({
        type: CLEAR_ERRORS
    });
};