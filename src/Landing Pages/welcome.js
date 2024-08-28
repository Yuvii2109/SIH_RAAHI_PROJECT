import React from 'react';
import "./welcome.css";
import Navbar from './navbar';
import Footer from './footer';

function WelcomePage() {
      return (
        <>
            <div className="welcome">
                <Navbar/>
            </div>
            <div className='Listings container-fluid'>
                <h1 className='pt-5 mb-5' style={{textAlign: "center"}}>
                    <i>Where do you wish to visit in India???</i>
                </h1>
                <div className='row ms-5 me-2 mt-5 pb-5 p-5' style={{display: "flex", paddingRight: "0"}}>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="media/images/delhi.jpg" class="card-img-top" style={{width: "100%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Delhi</i></b></u></h5>
                            <p class="card-text">"Feel the pulse of Delhi, where past and present coexist in harmony."</p>
                            <br/>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{width: "100%"}} src="media/images/UP.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Uttar Pradesh</i></b></u></h5>
                            <p class="card-text">"Unveil the mystique of Uttar Pradesh, where history and spirituality converge."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/Andhra.png" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Andhra Pradesh</i></b></u></h5>
                            <p class="card-text">"Unravel the charm of Andhra Pradesh, a blend of heritage and natural splendor."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-md-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="media/images/Haryana.jpg" class="card-img-top" style={{height: "50%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Haryana</i></b></u></h5>
                            <p class="card-text">"Unveil Haryana, where agricultural heartlands meet urban innovation."</p>
                            <br/>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/Arunachal.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Arunachal Pradesh</i></b></u></h5>
                            <p class="card-text">"Explore Arunachal Pradesh, where every landscape is a canvas of natural beauty."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/Assam.webp" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Assam</i></b></u></h5>
                            <p class="card-text">"Journey through Assam, where every sip of tea tells a story of the land."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="media/images/Bihar.jpg" class="card-img-top" style={{height: "50%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Bihar</i></b></u></h5>
                            <p class="card-text">"Journey through Bihar, where ancient wisdom and vibrant culture converge."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/Chhatisgarh.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Chhatisgarh</i></b></u></h5>
                            <p class="card-text">"Explore Chhattisgarh, the land of waterfalls, forests, and vibrant tribal culture."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/Goa.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Goa</i></b></u></h5>
                            <p class="card-text">"Journey through Goa, where relaxation and adventure go hand in hand."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="media/images/Gujarat.jpg" class="card-img-top" style={{height: "50%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Gujarat</i></b></u></h5>
                            <p class="card-text">"Journey through Gujarat, where every corner is a story waiting to be told."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/Himachal.webp" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Himachal Pradesh</i></b></u></h5>
                            <p class="card-text">"Explore Himachal Pradesh, where the mountains meet the sky in breathtaking beauty."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/Jharkhand.webp" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Jharkhand</i></b></u></h5>
                            <p class="card-text">"Unravel the beauty of Jharkhand, from its verdant hills to vibrant communities."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="media/images/Karnataka.jpg" class="card-img-top" style={{height: "50%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Karnataka</i></b></u></h5>
                            <p class="card-text">"Discover Karnataka, a state of ancient temples and modern marvels."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-md-2 '>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/Kerala.png" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Kerala</i></b></u></h5>
                            <p class="card-text">"Discover Kerala, God's Own Country, where nature's beauty abounds."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/Madhya.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Madhya Pradesh</i></b></u></h5>
                            <p class="card-text">"Experience Madhya Pradesh, a state of majestic forts and diverse wildlife."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="media/images/Maharashtra.jpg" class="card-img-top" style={{height: "50%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Maharashtra</i></b></u></h5>
                            <p class="card-text">"Explore Maharashtra, from the peaks of the Western Ghats to the shores of Mumbai."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/Manipur.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Manipur</i></b></u></h5>
                            <p class="card-text">"Discover Manipur, the Jewel of India, where culture and nature shine brightly."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/Meghalaya.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Meghalaya</i></b></u></h5>
                            <p class="card-text">"Discover Meghalaya, the Abode of Clouds, where nature's beauty is unparalleled."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="media/images/Mizoram.webp" class="card-img-top" style={{width: "100%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Mizoram</i></b></u></h5>
                            <p class="card-text">"Discover Mizoram, the Land of the Highlanders, where culture and nature are inseparable."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/Nagaland.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Nagaland</i></b></u></h5>
                            <p class="card-text">"Discover Nagaland, the land of vibrant tribes and pristine landscapes."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/Odisha.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Odisha</i></b></u></h5>
                            <p class="card-text">"Unravel the beauty of Odisha, from its sacred temples to tranquil beaches."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-md-2 col-lg-1'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="media/images/Punjab.jpg" class="card-img-top" style={{width: "100%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Punjab</i></b></u></h5>
                            <p class="card-text">"Discover Punjab, where tradition meets the rhythms of Bhangra."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/Rajasthan.webp" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Rajasthan</i></b></u></h5>
                            <p class="card-text">"Journey through Rajasthan, where grandeur and history come alive."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-md-2'>

                    </div>
                    <div className='col-lg-3' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/Sikkim.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Sikkim</i></b></u></h5>
                            <p class="card-text">"Discover Sikkim, the Land of the Thunder Dragon, where nature's beauty is pristine."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="media/images/Tamil.jpg" class="card-img-top" style={{width: "100%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Tamil Nadu</i></b></u></h5>
                            <p class="card-text">"Discover Tamil Nadu, the land of ancient temples and classical arts."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/Telangana.avif" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Telangana</i></b></u></h5>
                            <p class="card-text">"Unravel the beauty of Telangana, from its historic sites to bustling markets."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/Tripura.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Tripura</i></b></u></h5>
                            <p class="card-text">"Explore Tripura, where history, culture, and nature create a unique mosaic."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="media/images/Uttrakhand.jpg" class="card-img-top" style={{height: "50%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Uttrakhand</i></b></u></h5>
                            <p class="card-text">"Explore Uttarakhand, from the heights of the Himalayas to the banks of the Ganges."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/West.webp" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>West Bengal</i></b></u></h5>
                            <p class="card-text">"Explore West Bengal, from the peaks of the Himalayas to the deltas of the Ganges."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="media/images/JK.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Jammu And Kashmir</i></b></u></h5>
                            <p class="card-text">"Discover Jammu and Kashmir, the crown jewel of India, where beauty knows no bounds."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default WelcomePage;