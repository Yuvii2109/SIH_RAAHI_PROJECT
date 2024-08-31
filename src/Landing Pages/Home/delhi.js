import React from 'react';
import Navbar from '../navbar';
import Footer from '../footer';
import "./delhi.css";  

function DelhiPage() {
    return (
        <>
            <div className='Delhi'>
                <Navbar/>
                <div className="delhi-content row" style={{width: "100%"}}>
                    <br/> <br/>
                    <div className='col-sm-0 col-md-2 col-lg-3'>

                    </div>
                    <div className='col-sm-12 col-md-8 col-lg-6 mt-5 tagline'>
                        <h1>
                            Dilwalon ki 
                            <i><b> Dilli...</b></i>
                        </h1>
                    </div>
                </div>
            </div>
            <div className='Listings container-fluid'>
                <h1 className='pt-5 mb-5' style={{textAlign: "center"}}>
                    <i>Delhi Aakar Yeh nahi Kiya Toh Kya kiya?</i>
                </h1>
                <div className='row ms-5 mt-5 pb-5 p-5 mb-5' style={{display: "flex", paddingRight: "0"}}>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "26rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0", paddingBottom: "1rem"}}>
                        <img src="https://images.pexels.com/photos/4059538/pexels-photo-4059538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="card-img-top" style={{width: "100%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2' style={{textAlign: "center"}}>
                            <h5 class="card-title"><u><b><i>Monuments</i></b></u></h5>
                            <p class="card-text">Are you a monument person? Let's see how many you can cover by the end of the trip...</p>
                            <br/>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-1'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "26rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0", paddingBottom: "1rem"}}>
                        <img src="https://delhitourism.travel/images/places-to-visit/headers/dilli-haat-delhi-tourism-entry-fee-timings-holidays-reviews-header.jpg" class="card-img-top" style={{height: "57%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2' style={{textAlign: "center"}}>
                            <h5 class="card-title"><u><b><i>Markets/Streets</i></b></u></h5>
                            <p class="card-text">How about a souvenir from the heart of India? You can't resist the markets of Delhi anyway...</p>
                            <br/>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "26rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0", paddingBottom: "1rem"}}>
                        <img src="https://www.fabhotels.com/blog/wp-content/uploads/2019/01/Amusement-Park-1.jpg" class="card-img-top" style={{width: "100%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2' style={{textAlign: "center"}}>
                            <h5 class="card-title"><u><b><i>Fun Places</i></b></u></h5>
                            <p class="card-text">Ready to have some fun aye? Let's see what's Delhi got for the young blood as well as the young hearts...</p>
                            <br/>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-md-1 col-lg-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "26rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0", paddingBottom: "1rem"}}>
                        <img src="https://media.easemytrip.com/media/Blog/India/637116640324801740/637116640324801740fHrmt3.jpg" class="card-img-top" style={{height: "58%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2' style={{textAlign: "center"}}>
                            <h5 class="card-title"><u><b><i>Religious</i></b></u></h5>
                            <p class="card-text">Let's see which religions are followed in Delhi... Well... All of them... Let's go!!!</p>
                            <br/>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
            <div className='Listings container-fluid'>
                <hr/>
                <h1 className='pt-5 mb-5' style={{textAlign: "center"}}>
                    <i>Places of Stay...</i>
                </h1>
                <div className='row ms-5 me-2 mt-5 pb-5 p-5' style={{display: "flex", paddingRight: "0"}}>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="https://www.theluxevoyager.com/wp-content/uploads/2018/02/Taj-Palace-New-Delhi-Exterior-View.jpg" class="card-img-top" style={{height: "50%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Taj Palace, Delhi</i></b></u></h5>
                            <p class="card-text">
                                
                                New Delhi, India
                            </p>
                            <br/>
                            <a href="#" class="btn btn-primary">See</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default DelhiPage;