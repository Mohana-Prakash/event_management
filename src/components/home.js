import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Home() {
    return (
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
    )
}

export default Home