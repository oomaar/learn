import React from "react";
import Navigation from "./components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Jumbo from "./components/Jumbo";
import CarouselComponent from "./components/Carousel";

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Jumbo />
        <CarouselComponent />
      </div>
    </>
  );
}

export default App;
