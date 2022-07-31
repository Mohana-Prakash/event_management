import React, { useState, useEffect } from 'react'

import B1 from '../assets/eventImages/birthday/b1.jpg'
import B2 from '../assets/eventImages/birthday/b2.jpg'
import B3 from '../assets/eventImages/birthday/b3.jpeg'
import B4 from '../assets/eventImages/birthday/b4.jpg'
import B5 from '../assets/eventImages/birthday/b5.jpg'
import B6 from '../assets/eventImages/birthday/b6.png'

import C1 from '../assets/eventImages/corporate/c1.jpg'
import C2 from '../assets/eventImages/corporate/c2.png'
import C3 from '../assets/eventImages/corporate/c3.jpg'
import C4 from '../assets/eventImages/corporate/c4.jpg'
import C5 from '../assets/eventImages/corporate/c5.jpg'
import C6 from '../assets/eventImages/corporate/c6.jpg'

import Enter1 from '../assets/eventImages/entertainment/enter1.jpeg'
import Enter2 from '../assets/eventImages/entertainment/enter2.jpeg'
import Enter3 from '../assets/eventImages/entertainment/enter3.jpeg'
import Enter4 from '../assets/eventImages/entertainment/enter4.jpeg'

import Expo1 from '../assets/eventImages/expos/expo1.JPG'
import Expo2 from '../assets/eventImages/expos/expo2.jpg'
import Expo3 from '../assets/eventImages/expos/expo3.jpg'
import Expo4 from '../assets/eventImages/expos/expo4.jpg'

import Wed1 from '../assets/eventImages/wedding/wed1.jpg'
import Wed2 from '../assets/eventImages/wedding/wed2.jpg'
import Wed3 from '../assets/eventImages/wedding/wed3.jpg'
import Wed4 from '../assets/eventImages/wedding/wed4.jpg'
import Wed5 from '../assets/eventImages/wedding/wed5.jpg'
import Wed6 from '../assets/eventImages/wedding/wed6.jpg'

function AboutUs() {
    const [index, setIndex] = useState(0)
    const [imageObj, setImageObj] = useState({})
    const [itemName, setItemName] = useState('Wedding')
    const items = [
        {
            'name': 'Wedding',
            'src': [Wed1,Wed2,Wed3,Wed4,Wed5,Wed6]
        },
        {
            'name': 'Birthday/Home',
            'src': [B1,B2,B3,B4,B5,B6]
        },
        {
            'name': 'Corporate',
            'src': [C1,C2,C3,C4,C5,C6]
        },
        {
            'name': 'Entertainment',
            'src': [Enter1, Enter2, Enter3, Enter4]
        },
        {
            'name': 'Expo’s and Mela',
            'src': [Expo1, Expo2, Expo3, Expo4]
        }
    ]

    useEffect(() => {
        setImageObj(items.find(a => a.name === itemName));
    }, [])

    const services = [
        'Wedding',
        'Birthday/Home',
        'Entertainment',
        'Corporate',
        'Expo’s and Mela'
    ]

    const serviceHandler = (e, i) => {
        setIndex(i)
        setItemName(e);
        setImageObj(items.find(a => a.name === e));
        console.log(e);
    }

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