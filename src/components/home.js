import React from 'react'
import bannerImg from "./../../src/assets/images/homeBg.jpg"

function Home() {

    return (
        <div className="" id="home">
            {/* <div className="content_div text-center">
                <h2>WELCOME TO</h2>
                <h1>OUR EVENT PLANNER</h1>
                <p>WEDDING, BIRTHDAY, CORPORATE EVENTS</p>
                <button className="btn btn-primary home_button">Get Started</button>
            </div> */}
            <img src={bannerImg} className='w-100' />
        </div>
    )
}

export default Home