import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Offerings from "./offerings";
import About from "./about";
import Stories from "./stories";
import ShareStory from "./sharestory";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/offerings" element={<Offerings />} />
        <Route path="/about" element={<About />} />
        <Route path="/sharestory" element={<ShareStory />} />
      </Routes>
    </Router>
  );
};

export default App;