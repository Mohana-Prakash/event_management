import React from "react";
import './App.css'
import GoogleMaps from './components/map'
import Footer from "./components/footer";
import Service from "./components/service";
import AboutUs from "./components/aboutUs";
import Home from './components/home'
import Gallery from "./components/gallery";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <Nav />
      <Home />
      <AboutUs />
      <Service />
      <Gallery />
      <GoogleMaps />
      <Footer />
    </>
  );
}

export default App;
