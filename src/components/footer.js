import React, { useRef } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

function Footer() {

    const form = useRef();
    const d = new Date();
    let year = d.getFullYear();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0r8exhn', 'template_4kekupc', form.current, 'wo71NgVYUecgLcj4x')
            .then((result) => {
                console.log(result.text);
                toast.success('Thank you for getting in touch! We appreciate you contacting us. We will get back in touch with you soon! Have a great day!', {
                    autoClose: 8000
                })
                document.getElementById("subscribe_form").reset();
            }, (error) => {
                console.log(error.text);
            });
    };

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
                        <form ref={form} onSubmit={sendEmail} id="subscribe_form">
                            <div className="field mb-3" style={{display:"none"}}>
                                <label>Subject</label>
                                <input type="text" name="subject" value='Madha Events'/>
                            </div>
                            <div className="field mb-3">
                                <label>Name</label>
                                <input type="text" name="name" class="form-control" placeholder="Enter Name" />
                            </div>
                            <div className="field mb-3">
                                <label>Email</label>
                                <input type="email" name="email" class="form-control" placeholder="Enter Email" />
                            </div>
                            <div className="field mb-3">
                                <label>Name</label>
                                <input type="number" name="phone_number" class="form-control" placeholder="Enter Number" />
                            </div>
                            <div className="email_button">
                                <button type='submit' className="btn btn-primary w-100">Contact</button>
                            </div>
                        </form>
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