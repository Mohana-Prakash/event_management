import React from 'react'
import Carousel from 'react-material-ui-carousel'
import AboutImg1 from '../assets/images/resizedAbout.png'

function AboutUs() {
    var items = [AboutImg1]
    return (
        <div id="about" className="container mt-4">
            <h1 className="text-center">About Us</h1>
            <hr style={{ width: "10%", border: "2px solid tan", margin: "10px auto 0" }}></hr>
            <div className="carousel_items">
                <Carousel className="carousel">
                    {
                        items.map((item, i) => {
                            return (
                                <img
                                    style={{
                                        width: "100%",
                                        borderRadius: "10px"
                                    }}
                                    src={item}
                                />
                            )
                        })
                    }
                </Carousel>
                <p style={{ letterSpacing: "1px", wordSpacing: "10px" }}>
                    We are here to <b>Plan, Organize, and Execute</b> your events with “WOW!” factor.
                    “Make your wish” is not just a tagline of our company , we make your ultimate dreams into reality.
                    We have an enthusiastic team with lot of innovative ideas and experienced professional behind the screen. We take up events like
                    <ul className='my-4' style={{ color: "deeppink", fontWeight: "700" }}>
                        <li className='my-2'>Wedding</li>
                        <li className='my-2'>Birthday parties</li>
                        <li className='my-2'>Anniversaries</li>
                        <li className='my-2'>Corporate events</li>
                        <li className='my-2'>Surprise planning</li>
                        <li classNalie='my-2'>product launch</li>
                        <li className='my-2'>Expo’s and etc.,</li>
                    </ul>
                    Let our magical part fill of your events,
                    welcome to Madha events, Make your wish.
                </p>
            </div>
        </div>
    )
}

export default AboutUs