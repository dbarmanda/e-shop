import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout"
import Login from "./components/login/Login";
import Products from "./components/Products/Products";
import ProductDetail from "./components/productDetail/ProductDetail";
import Loader from "./components/loader/Loader";
import Signup from "./components/signup/Signup";

function App() {
  return (
    <Router>
      <div className="app">
      
        

        {/* Going with Routes  */}
        <Routes>
          <Route exact path="/login" element= { <Login/>} > 
              </Route>

          <Route exact path="/checkout" element={<> <Navbar /> <Checkout /> </>}>
              </Route>

          <Route exact path="/" element={<> <Navbar/> <Home/> </>}>
          
              </Route>
              
              <Route exact path="/products" element={<> <Navbar/> <Products/> </>}>
          
              </Route>

 <Route exact path="/product/:id" element={<> <Navbar/> <ProductDetail /> </>}>
          
              </Route>
              
              
              <Route exact path="/signup" element={  <Signup /> }>

          
              </Route>

              
        </Routes>
      </div>
    </Router>
  );
}

export default App;
