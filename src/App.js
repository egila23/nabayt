import React from "react";
import { BrowserRouter as Router,Routes ,Route } from "react-router-dom";
import Navbar from "./navbar"
import Home from "./home";
import Offerings from "./offerings";
import About from "./about";
import Stories from "./stories";
import Sharestory from "./sharestory";
const App = ()=>{
  return (
    <Router>
      <navbar>
<Routes>
        <Route path="./home"exact Component={Home}/>
        <Route path="./stories"exact Component={Stories}/>
        <Route path="./offerings"exact Component={Offerings}/>
        <Route path="./about"exact Component={About}/>
        <Route path="./sharestory"exact Component={Sharestory}/>
      
        </Routes>
        </navbar>
      
    </Router>
  );
};
export default App;