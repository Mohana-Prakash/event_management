import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { Link } from 'react-scroll'

function Nav() {

    const [index, setIndex] = useState(0)
    const menuArr = ["Home", "About", "Service", "Contact", "Gallery"]

    const menuHandler = (e, i) => {
        setIndex(i)
    }

    return (
        <nav class="navbar" id='nav'>
            <div class="logo"><img className='logow-100' src={Logo} />MADHA EVENTS</div>
            <ul class="nav-links m-0">
                <input type="checkbox" id="checkbox_toggle" />
                <label for="checkbox_toggle" class="hamburger">&#9776;</label>
                <div class="menu">
                    {
                        menuArr.map((e, i) => {
                            return (
                                <li className={index === i && 'menu_select'}>
                                    <Link
                                        onClick={() => menuHandler(e, i)}
                                        to={e.toLowerCase()}
                                        spy={true}
                                        smooth={true}
                                    >
                                        {e}
                                    </Link>
                                </li>
                            )
                        })
                    }
                    <li><a href="https://www.facebook.com/" target="_blank"><FacebookIcon /></a></li>
                    <li><a href="https://www.instagram.com/" target="_blank"><InstagramIcon /></a></li>
                </div>
            </ul>
        </nav>
    )
}

export default Nav