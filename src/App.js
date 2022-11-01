import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./components/Home/Home";
import NotFound404 from "./components/NotFound404/NotFound404";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbId" element={<Home />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
