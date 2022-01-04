// import axios from "axios";
import axios from "../../axios";

import {ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    CLEAR_ERRORS
} from "../constants/productConsts";



export const getProduct = () => async(dispatch)=> {

    try {

        //dispacth the action
        dispatch({
            type: ALL_PRODUCT_REQUEST
        })
        // console.log("hello")
        //fetches data from our backend
        const {data} = await axios.get("/api/v1/products");
        
        
     
            dispatch({
                type: ALL_PRODUCT_SUCCESS,
                payload: data,
            })
            
        

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message,
        })
    }
};


// clearing errors
export const clearErrors = () => async(dispatch)=> {
    dispatch({
        type: CLEAR_ERRORS
    });
}