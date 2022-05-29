import React from "react";
import './App.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import CakeIcon from '@material-ui/icons/Cake';

function App() {

  return (
    <>
      <div className="main_div">
        <div className="nav p-3">
          <div className="nav_logo text-light d-flex">
            <p>Logo</p>
            <p className="ml-3">MADHA EVENTS</p>
          </div>
          <div className="nav_right">
            <div className="nav_menu">
              <p>Home</p>
              <p>About</p>
              <p>Service</p>
              <p>Contact</p>
              <p>Gallery</p>
            </div>
            <div className="nav_icons">
              <FacebookIcon />
              <InstagramIcon />
            </div>
          </div>
        </div>
        <div className="content_div text-center">
          <h2>WELCOME TO</h2>
          <h1>OUR EVENT PLANNER</h1>
          <p>WEDDING, BIRTHDAY</p>
          <button className="btn btn-primary home_button">Get Started</button>
        </div>
      </div>
      <div className="service_div container">
        <h1 className="text-center">What <b>We Do</b></h1>
        <div className="service_cards mb-4">
          <div className="w-25 single_card">
            <CakeIcon />
            <div className="ml-2">
              <h3>Birthday Event</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
          </div>
          <div className="w-25 single_card">
            <CakeIcon />
            <div className="ml-2">
              <h3>Birthday Event</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
          </div>
          <div className="w-25 single_card">
            <CakeIcon />
            <div className="ml-2">
              <h3>Birthday Event</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
          </div>
          <div className="w-25 single_card">
            <CakeIcon />
            <div className="ml-2">
              <h3>Birthday Event</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
          </div>
        </div>
        <div className="service_cards">
          <div className="w-25 single_card2">
            <CakeIcon />
            <div className="ml-2">
              <h3>Birthday Event</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
          </div>
          <div className="w-25 single_card2">
            <CakeIcon />
            <div className="ml-2">
              <h3>Birthday Event</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
          </div>
          <div className="w-25 single_card2">
            <CakeIcon />
            <div className="ml-2">
              <h3>Birthday Event</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
          </div>
          <div className="w-25 single_card2">
            <CakeIcon />
            <div className="ml-2">
              <h3>Birthday Event</h3>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
