import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Favoriteslist from "./components/FavoritesList";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container">
          <br />
          <Route exact path="/favorites" component={Favoriteslist} />
        </div>
      </div>
    </Router>
  );
}

export default App;
