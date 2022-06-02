import React, { useState } from 'react'
import Carousel from 'react-material-ui-carousel'
import eventWallpaper from '../assets/event_wallpaper.jpg'
import Candle from '../assets/candle.jpg'
import Mike from '../assets/mike.jpg'

function AboutUs() {
    const [index, setIndex] = useState()
    const [imageObj, setImageObj] = useState({})
    const items = [
        {
            'name': 'Wedding',
            'src': [
                'https://external-preview.redd.it/IVShPk3qXszXr4YWddb4-9nIQPCO4-q5m6ajalzFaUA.jpg?auto=webp&s=e33f3d91033839b2a58b01d04853151508c2da5f',
                eventWallpaper,
                Mike,
                Candle
            ]
        },
        {
            'name': 'Birthday',
            'src': [
                'https://images.alphacoders.com/789/789452.jpg',
                eventWallpaper,
                Mike,
                Candle
            ]
        },
        {
            'name': 'Corporate',
            'src': [
                'https://images2.alphacoders.com/792/792609.jpg',
                eventWallpaper,
                Mike,
                Candle
            ]
        },
        {
            'name': 'Entertainment',
            'src': [
                'https://images8.alphacoders.com/710/710504.png',
                eventWallpaper,
                Mike,
                Candle
            ]
        }
    ]

    const services = [
        'Wedding',
        'Birthday',
        'Entertainment',
        'Corporate',
        'Product Launch',
        'Expo’s and Mela'
    ]

    const serviceHandler = (e, i) => {
        setIndex(i)
        const object = items.find(a => a.name === e)
        setImageObj(object);
    }
    console.log(imageObj)
    return (
        <div id="gallery" className="container mt-4">
            <h1 className="text-center">Galleries</h1>
            <hr style={{ width: "10%", border: "2px solid tan", margin: "10px auto 0" }}></hr>
            <div className='services_list mt-3'>
                {
                    services.map((e, i) => {
                        return (
                            <p
                                onClick={() => serviceHandler(e, i)}
                                key={i}
                                className={index === i ? "serviceList" : 'serviceList1'}
                            >
                                {e}
                            </p>
                        )
                    })
                }
            </div>
            <div className='mt-3 mb-4 images_div'>
                {
                    imageObj?.src?.map(e => (
                        <div className='single_img col-xs-6 col-sm-6 col-md-6 col-lg-4'>
                            <img src={e} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutUs