import React from 'react';

function Footer() {
    return (
        <div className='container-fluid' style={{backgroundColor: "#f0f0f0", width: "100%", margin: "0", boxSizing: "border-box", marginBottom: "0", borderTop: "1px solid #eee"}}>
            <div className='row ps-5 pe-5'>
                <div className='col-lg-3 col-md-6 col-sm-12 mb-5 mt-5'>
                    <img src='media/images/RaahiLogo.png' style={{width: "40%"}}
                    className='mb-4'/>
                    <p style={{fontSize: "0.8rem"}} className='mb-4'>© 2024-, Raahi Pvt Ltd. <br/>
                    All rights reserved.</p>
                    <span className='text-muted' style={{fontSize: "1.2rem"}}>
                        <i style={{cursor: "pointer"}} class="fa-brands fa-x-twitter"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        <i style={{cursor: "pointer"}} class="fa-brands fa-square-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        <i style={{cursor: "pointer"}} class="fa-brands fa-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        <i style={{cursor: "pointer"}} class="fa-brands fa-linkedin-in"></i> 
                        <hr style={{width: "90%"}}/>
                        <i style={{cursor: "pointer"}} class="fa-brands fa-youtube"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        <i style={{cursor: "pointer"}} class="fa-brands fa-whatsapp"></i>&nbsp;&nbsp;&nbsp;&nbsp;
                        <i style={{cursor: "pointer"}} class="fa-brands fa-telegram"></i>
                    </span>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mb-5 mt-5'>
                    <h5 className='mb-3'>Company</h5>
                    <a className='text-muted' href=''>About</a> <br/>
                    <a className='text-muted' href=''>Pricing</a> <br/>
                    <a className='text-muted' href=''>Careers</a> <br/>
                    <a className='text-muted' href=''>Raahi.tech</a> <br/>
                    <a className='text-muted' href=''>Press & Media</a> <br/>
                    <a className='text-muted' href=''>Raahi Cares</a> <br/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mt-5 mb-5'>
                    <h5 className='mb-3'>Support</h5>
                    <a href='' className='text-muted'>Contact us</a><br/>
                    <a href='' className='text-muted'>Support portal</a><br/>
                    <a href='' className='text-muted'>Videos</a><br/>
                    <a href='' className='text-muted'>How to file a complaint?</a><br/>
                    <a href='' className='text-muted'>Status of your complaints</a><br/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mt-5 mb-5'>
                    <h5 className='mb-3'>Account</h5>
                    <a href='' className='text-muted'>Sign in</a> <br/>
                    <a href='' className='text-muted'>Reviews</a>
                </div>
                <div>
                    <p className='text-muted mt-5 mb-3' style={{fontSize: "0.8rem"}}>
                        "Explore the world with Raahi, your trusted travel companion." "Discover new destinations with Raahi's curated travel experiences." "Plan your next adventure with Raahi and create unforgettable memories." "Travel smartly and safely with Raahi's expert travel tips." "Embrace wanderlust with Raahi's comprehensive travel guides." "Experience seamless travel planning with Raahi's intuitive platform." "Navigate the globe confidently with Raahi's reliable travel insights."
                        <br/><br/>
                        "Let Raahi be your gateway to extraordinary travel experiences." "Unlock the world's wonders with Raahi's personalized travel recommendations." "Embark on a journey of discovery with Raahi's diverse travel resources."</p><br/><br/>
                </div>
            </div>
        </div>
    );
}

export default Footer;