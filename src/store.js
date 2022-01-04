import { configureStore } from "@reduxjs/toolkit";

//middlewares

import productReducer from "./state/reducers/index";

export default function configureAppStore() {
  const store = configureStore({
    reducer: {
        products: productReducer,  //the name in redux store
    },    
    middleware: (getDefaultMiddleware) =>getDefaultMiddleware(),
    //.concate to add middlewares
    
  });

  return store;
}
