import React from 'react'
import CakeIcon from '@material-ui/icons/Cake';

function Service() {
    return (
        <div className="container-fluid mt-4" style={{ backgroundColor: "#f5f5f5" }}>
            <div className="service_div container">
                <h1 className="text-center m-0">What <b>We Do</b></h1>
                <hr style={{ width: "10%", border: "2px solid tan", margin: "10px auto 0" }}></hr>
                <div className="service_cards">
                    <div className="w-25 single_card">
                        <CakeIcon />
                        <div className="ml-2">
                            <h3>Birthday Event</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                    </div>
                    <div className="w-25 single_card">
                        <CakeIcon />
                        <div className="ml-2">
                            <h3>Birthday Event</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                    </div>
                    <div className="w-25 single_card">
                        <CakeIcon />
                        <div className="ml-2">
                            <h3>Birthday Event</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                    </div>
                    <div className="w-25 single_card">
                        <CakeIcon />
                        <div className="ml-2">
                            <h3>Birthday Event</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                    </div>
                </div>
                <div className="service_cards m-0">
                    <div className="w-25 single_card2">
                        <CakeIcon />
                        <div className="ml-2">
                            <h3>Birthday Event</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                    </div>
                    <div className="w-25 single_card2">
                        <CakeIcon />
                        <div className="ml-2">
                            <h3>Birthday Event</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                    </div>
                    <div className="w-25 single_card2">
                        <CakeIcon />
                        <div className="ml-2">
                            <h3>Birthday Event</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                    </div>
                    <div className="w-25 single_card2">
                        <CakeIcon />
                        <div className="ml-2">
                            <h3>Birthday Event</h3>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service