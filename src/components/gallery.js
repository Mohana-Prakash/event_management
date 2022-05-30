import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import eventWallpaper from '../assets/event_wallpaper.jpg'

function AboutUs() {
    const [index, setIndex] = useState(0)
    const services = ['Wedding',
        'Birthday',
        'Entertainment',
        'Corporate',
        'Product Launch',
        'Expo’s and Mela'
    ]
    var items = [
        {
            src: 'https://external-preview.redd.it/IVShPk3qXszXr4YWddb4-9nIQPCO4-q5m6ajalzFaUA.jpg?auto=webp&s=e33f3d91033839b2a58b01d04853151508c2da5f'
        },
        {
            src: eventWallpaper
        }
    ]
    const serviceHandler = (i) => {
        setIndex(i)
    }
    return (
        <div className="container mt-4">
            <h1 className="text-center">Galleries</h1>
            <hr style={{ width: "10%", border: "2px solid tan", margin: "10px auto 0" }}></hr>
            <div className='services_list mt-3'>
                {
                    services.map((e, i) => {
                        return (
                            <p
                                onClick={() => serviceHandler(i)}
                                key={i}
                                className={index === i ? "serviceList" : 'serviceList1'}
                            >
                                {e}
                            </p>
                        )
                    })
                }
            </div>
            <Carousel className='mt-3 mb-4'>
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
        </div>
    )
}

export default AboutUs