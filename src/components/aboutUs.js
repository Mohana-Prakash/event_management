import React from 'react'
import Carousel from 'react-material-ui-carousel'
import eventWallpaper from '../assets/event_wallpaper.jpg'

function AboutUs() {
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
    )
}

export default AboutUs