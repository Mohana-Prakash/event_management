import React from 'react'

function Home() {
    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    return (
        <div className="main_div" id="home">
            {/* <div className="nav p-3">
                <div className="nav_logo text-light">
                    <div className='site_logo'><img className='w-100' src={Logo} /></div>
                    <p className='ml-3'>MADHA EVENTS</p>
                </div>
                <div className="nav_right">
                    <div className="nav_menu">
                        <div class="topnav" id="myTopnav">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Service</a>
                            <a href="#">Contact</a>
                            <a href="#">Gallery</a>

                            <a href="javascript:void(0);" class="icon" onClick={myFunction}>
                                <MenuIcon />
                            </a>
                        </div>
                    </div>
                    <div className="nav_icons">
                        <FacebookIcon />
                        <InstagramIcon />
                    </div>
                </div>
            </div> */}
            <div className="content_div text-center">
                <h2>WELCOME TO</h2>
                <h1>OUR EVENT PLANNER</h1>
                <p>WEDDING, BIRTHDAY, CORPORATE EVENTS</p>
                <button className="btn btn-primary home_button">Get Started</button>
            </div>
        </div>
    )
}

export default Home