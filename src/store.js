import { configureStore } from "@reduxjs/toolkit";

//middlewares

  import {productsReducer, productDetailsReducer} from "./state/reducers/productReducer";
import { userReducer } from "./state/reducers/useReducer";

export default function configureAppStore() {
  const store = configureStore({
    reducer: {
        products: productsReducer,  //the name in redux store
        productDetails: productDetailsReducer,
        user: userReducer
    },    
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware(),
    //.concate to add middlewares
    
  });

  return store;
}
