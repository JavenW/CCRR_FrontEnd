import './App.css';

import React, { Component } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";

import {
  Home,
  About,
  NotFound,
  SignIn,
} from "./pages";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/error" element={<NotFound />} />
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/blog" element={<Blog />}>
          <Route path="" element={<Posts />} />
          <Route path=":postSlug" element={<Post />} />
        </Route> */}
        <Route path='*' element={<Navigate to="/error" replace />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;