import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import NotFound404 from "./components/NotFound404/NotFound404";
import "./App.scss";
import MovieDetail from "./components/MovieDetail/MovieDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
