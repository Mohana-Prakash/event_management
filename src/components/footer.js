import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import { toast } from 'react-toastify';

function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    const handleClick = () => {
        toast.success('Thank you for getting in touch! We appreciate you contacting us. We will get back in touch with you soon! Have a great day!', {
            autoClose: 8000
        })
    }
    return (
        <>
            <div className="footer_div container-fluid">
                <h1 className="text-center">Subscribe to <b style={{ color: "deeppink" }}>Our Newsletter</b></h1>
                <hr style={{ width: "10%", border: "2px solid tan", margin: "10px auto 0" }}></hr>
                <div className="footer_sections">
                    <div className="contact">
                        <div className="d-flex card_single_card">
                            <LocationOnIcon />
                            <div className="ml-3">
                                <h5>Address</h5>
                                <p className="m-0">No.6, Vinayagar Koil Street</p>
                                <p className="m-0">Kamarajar Road, 5th Stop</p>
                                <p className="m-0">Thirunagar, Maadurai - 625006</p>
                            </div>
                        </div>
                        <div className="d-flex card_single_card">
                            <PhoneIphoneIcon />
                            <div className="ml-3">
                                <h5>Phone</h5>
                                <p className="m-0">+91 97376 78623</p>
                                <p className="m-0">+91 97376 78623</p>
                            </div>
                        </div>
                        <div className="d-flex card_single_card">
                            <EmailIcon />
                            <div className="ml-3">
                                <h5>Email</h5>
                                <p className="m-0">iasmohan96@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="media_icons text-center">
                        <h5>Get in touch</h5>
                        <FacebookIcon style={{ fontSize: "35px" }} />
                        <InstagramIcon className="ml-3" style={{ fontSize: "35px" }} />
                    </div>
                    <div className="email_card text-light">
                        <h5 className="text-center">Contact Us</h5>
                        <div className="field mb-3">
                            <label>Name</label>
                            <input placeholder="Enter Name" class="form-control" type='text'/>
                        </div>
                        <div className="field mb-3">
                            <label>Email</label>
                            <input placeholder="Enter Email" class="form-control" type='email'/>
                        </div>
                        <div className="field mb-3">
                            <label>Phone Number</label>
                            <input placeholder="Enter Number" class="form-control"type='number' />
                        </div>
                        <div className="email_button">
                            <button className="btn btn-primary w-100" onClick={handleClick}>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <p className='m-0'>© {year} <b style={{ color: "green" }}>Madha Events</b>. All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer