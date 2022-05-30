import React from 'react'
import CakeIcon from '@material-ui/icons/Cake';

function Service() {
    return (
        <div className="container-fluid mt-4" style={{ backgroundColor: "#f5f5f5" }}>
            <div className="service_div container">
                <h1 className="text-center m-0">What <b>We Do</b></h1>
                <hr style={{ width: "10%", border: "2px solid tan", margin: "10px auto 0" }}></hr>
                <div className="service_cards">
                    <div className="single_card">
                        <CakeIcon />
                        <div className="ml-2">
                            <h3>Wedding Planning & Decor</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                    </div>
                    <div className="single_card">
                        <CakeIcon />
                        <div className="ml-2">
                            <h3>Birthday Parties</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                    </div>
                    <div className="single_card">
                        <CakeIcon />
                        <div className="ml-2">
                            <h3>DJ, Music and Entertainment</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                    </div>
                    <div className="single_card">
                        <CakeIcon />
                        <div className="ml-2">
                            <h3>Photography</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                    </div>
                </div>
                <div className="service_cards m-0">
                    <div className="single_card2">
                        <CakeIcon />
                        <div className="ml-2">
                            <h3>Expo’s and Mela</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                    </div>
                    <div className="single_card2">
                        <CakeIcon />
                        <div className="ml-2">
                            <h3>Corporate Events</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                    </div>
                    <div className="single_card2">
                        <CakeIcon />
                        <div className="ml-2">
                            <h3>Product Launch</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                    </div>
                    <div className="single_card2">
                        <CakeIcon />
                        <div className="ml-2">
                            <h3>Elite Birthday Parties</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service