import React, { useEffect } from "react";
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
import Profile from "./components/login/Profile";

//Loading user
import { loadUser } from "./state/actions/userAction";
import { useDispatch, useSelector } from "react-redux";

//Protected User(problem: once we reload the page component loads earlier than the state thus throws error.. solution create a protectedRoute )
import ProtectedRoute from "./components/Route/ProtectedRoute"

function App() {

  const dispatch = useDispatch();

 const {isAuthenticated} = useSelector(state => state.user);

  useEffect(() => {
    if(localStorage.getItem('token')){
      dispatch(loadUser());
    }
  }, [])
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


              {/* ProtectedRoutes handling  */}
              <Route element={ <ProtectedRoute />} >
                <Route exact path="/account" element={<> <Navbar/> <Profile/> </>} />
                
              </Route>


              
        </Routes>
      </div>
    </Router>
  );
}

export default App;
