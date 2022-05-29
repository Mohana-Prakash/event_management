import React from "react";
import './App.css'
import GoogleMaps from './components/map'
import Footer from "./components/footer";
import Service from "./components/service";
import AboutUs from "./components/aboutUs";
import Home from './components/home'

function App() {
  return (
    <>
      <Home/>
      <AboutUs />
      <Service />
      <GoogleMaps />
      <Footer />
    </>
  );
}

export default App;
