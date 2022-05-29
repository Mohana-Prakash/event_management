import React from "react";
import './App.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import CakeIcon from '@material-ui/icons/Cake';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import eventWallpaper from './assets/event_wallpaper.jpg'
import Carousel from 'react-material-ui-carousel'
import GoogleMaps from './map'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {
  const mapData = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  var items = [
    {
      src: 'https://external-preview.redd.it/IVShPk3qXszXr4YWddb4-9nIQPCO4-q5m6ajalzFaUA.jpg?auto=webp&s=e33f3d91033839b2a58b01d04853151508c2da5f'
    },
    {
      src: eventWallpaper,
      description: "Hello World!"
    }
  ]
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
      <div className="container mt-4">
        <h1 className="text-center">About Us</h1>
        <hr style={{ width: "10%", border: "2px solid tan", margin: "10px auto 0" }}></hr>
        <div className="carousel_items">
          <Carousel className="carousel">
            {
              items.map((item, i) => {
                return (
                  <img
                    style={{
                      // height: "45vh",
                      width: "100%",
                      borderRadius: "10px"
                    }}
                    src={item.src}
                  />
                )
              })
            }
          </Carousel>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
      </div>
      <div className="container-fluid mt-4" style={{ backgroundColor: "#f5f5f5" }}>
        <div className="service_div container">
          <h1 className="text-center m-0">What <b>We Do</b></h1>
          <hr style={{ width: "10%", border: "2px solid tan", margin: "10px auto 0" }}></hr>
          <div className="service_cards">
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
          <div className="service_cards m-0">
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
      </div>
      <GoogleMaps />
      <div className="footer_div container-fluid">
        <h1 className="text-center">Subscribe to <b style={{ color: "deeppink" }}>Our Newsletter</b></h1>
        <hr style={{ width: "10%", border: "2px solid tan", margin: "10px auto 0" }}></hr>
        <div className="footer_sections">
          <div className="contact">
            <div className="d-flex card_single_card">
              <LocationOnIcon />
              <div className="ml-3">
                <h5>Address</h5>
                <p className="m-0">No.6, Vinayagar Koil Street</p>
                <p className="m-0">Kamarajar Road, 5th Stop</p>
                <p className="m-0">Thirunagar, Maadurai - 625006</p>
              </div>
            </div>
            <div className="d-flex card_single_card">
              <PhoneIphoneIcon />
              <div className="ml-3">
                <h5>Phone</h5>
                <p className="m-0">+91 97376 78623</p>
                <p className="m-0">+91 97376 78623</p>
              </div>
            </div>
            <div className="d-flex card_single_card">
              <EmailIcon />
              <div className="ml-3">
                <h5>Email</h5>
                <p className="m-0">iasmohan96@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="media_icons text-center">
            <h5>Get in touch</h5>
            <FacebookIcon style={{ fontSize: "35px" }} />
            <InstagramIcon className="ml-3" style={{ fontSize: "35px" }} />
          </div>
          <div className="email_card text-light">
            <h5 className="text-center">Contact Us</h5>
            <div className="field mb-3">
              <label>Name</label>
              <input placeholder="Enter Name" class="form-control"/>
            </div>
            <div className="field mb-3">
              <label>Email</label>
              <input placeholder="Enter Email" class="form-control"/>
            </div>
            <div className="field mb-3">
              <label>Phone Number</label>
              <input placeholder="Enter Number" class="form-control"/>
            </div>
            <div className="email_button">
              <button className="btn btn-primary w-100">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
