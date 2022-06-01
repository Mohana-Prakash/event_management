import React from 'react'
import Carousel from 'react-material-ui-carousel'
import eventWallpaper from '../assets/event_wallpaper.jpg'

function AboutUs() {
    var items = [
        {
            src: 'https://external-preview.redd.it/IVShPk3qXszXr4YWddb4-9nIQPCO4-q5m6ajalzFaUA.jpg?auto=webp&s=e33f3d91033839b2a58b01d04853151508c2da5f'
        },
        {
            src: eventWallpaper
        }
    ]
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
                                    src={item.src}
                                />
                            )
                        })
                    }
                </Carousel>
                <p style={{letterSpacing:"1px", wordSpacing:"10px"}}>
                    We are here to <b>Plan, Organize, and Execute</b> your events with “WOW!” factor.
                    “Make your wish” is not just a tagline of our company , we make your ultimate dreams into reality.
                    We have an enthusiastic team with lot of innovative ideas and experienced professional behind the screen. We take up events like <b style={{color:"deeppink"}}>Wedding, Birthday parties, Anniversaries, Corporate events, Surprise planning, product launch, Expo’s and etc.,</b> Let our magical part fill of your events,
                    welcome to Madha events, Make your wish.
                </p>
            </div>
        </div>
    )
}

export default AboutUs