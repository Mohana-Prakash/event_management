import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Logo from '../assets/logo.png'
import MenuIcon from '@material-ui/icons/Menu';

function Home() {
    return (
        <div className="main_div">
            <div className="nav p-3">
                <div className="nav_logo text-light">
                    <div className='site_logo'><img className='w-100' src={Logo} /></div>
                    <p className='ml-3'>MADHA EVENTS</p>
                </div>
                <MenuIcon
                    data-toggle="collapse"
                    href="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                />
                <div className="nav_right collapseExample">
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