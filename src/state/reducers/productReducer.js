import {ALL_PRODUCT_FAIL, ALL_PRODUCT_REQUEST, ALL_PRODUCT_SUCCESS
    ,CLEAR_ERRORS} from "../constants/productConsts"


    
const productsReducer = (state={product: []}, action)=> {
    switch(action.type){
        case ALL_PRODUCT_REQUEST: 
        return {
            loading: true,
            product: [],
        }
    
    case ALL_PRODUCT_SUCCESS: 
        return {
            loading: false,
            products: action.payload.products,
            productsCount: action.payload.productsCount,
        }   //will define actions in 'actions folder'

    case ALL_PRODUCT_FAIL: 
        return {
            loading: false,
            error: action.payload
        }

    case CLEAR_ERRORS:
        return {
            ...state,
            error: null,
        }

    default: 
        return state;
    }
}

export default productsReducer;