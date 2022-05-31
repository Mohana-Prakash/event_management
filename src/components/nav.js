import React from 'react'
import Logo from '../assets/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function nav() {
    return (
        <nav class="navbar">
            <div class="logo"><img className='logow-100' src={Logo} />MADHA EVENTS</div>
            <ul class="nav-links m-0">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                <div class="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Service</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/">Gallery</a></li>
                    <li><a href="/">  <FacebookIcon /></a></li>
                    <li><a href="/"><InstagramIcon /></a></li>
                </div>
            </ul>
        </nav>
    )
}

export default nav