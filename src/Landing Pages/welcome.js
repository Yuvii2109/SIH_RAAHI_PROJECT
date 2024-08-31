import React from 'react';
import "./welcome.css";
import Navbar from './navbar';
import Footer from './footer';
import DelhiPage from './Home/delhi';

function WelcomePage() {
      return (
        <>
            <DelhiPage/>
            <div className="welcome">
                <Navbar/>
                <div className="welcome-content row" style={{width: "100%"}}>
                    <br/> <br/>
                    <div className='col-md-6 col-lg-7'>

                    </div>
                    <div className='col-md-6 col-lg-5 mt-5'>
                        <h1>
                            Weaving your dreams <br/>
                            Into <i>unforgettable</i> <br/>
                            <i><b>Adventures...</b></i>
                        </h1>
                    </div>
                </div>
            </div>
            <div className='Listings container-fluid'>
                <h1 className='pt-5 mb-5' style={{textAlign: "center"}}>
                    <i>Where do you wish to visit in India?</i>
                </h1>
                <div className='row ms-5 me-2 mt-5 pb-5 p-5' style={{display: "flex", paddingRight: "0"}}>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="https://wallpapercave.com/wp/wp3917545.jpg" class="card-img-top" style={{width: "100%"}} alt="..."/>
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
                        <img style={{height: "50%"}} src="https://assets-news.housing.com/news/wp-content/uploads/2022/08/18071328/Andhra-Pradesh-3.png" class="card-img-top" alt="..."/>
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
                        <img style={{height: "50%"}} src="https://ihplb.b-cdn.net/wp-content/uploads/2021/10/Best-Places-to-Visit-in-Arunachal-Pradesh.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Arunachal Pradesh</i></b></u></h5>
                            <p class="card-text">"Explore Arunachal Pradesh, where every landscape is a canvas of natural beauty."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/assam-tourist-places.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Assam</i></b></u></h5>
                            <p class="card-text">"Journey through Assam, where every sip of tea tells a story of the land."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="https://www.holidify.com/images/cmsuploads/compressed/fh_20190728235947.jpg" class="card-img-top" style={{height: "50%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Bihar</i></b></u></h5>
                            <p class="card-text">"Journey through Bihar, where ancient wisdom and vibrant culture converge."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/1f/71/99/this-beautiful-monument.jpg?w=500&h=-1&s=1" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Chhatisgarh</i></b></u></h5>
                            <p class="card-text">"Explore Chhattisgarh, the land of waterfalls, forests, and vibrant tribal culture."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="https://t3.ftcdn.net/jpg/01/40/51/56/360_F_140515612_0MMpqpsIvs6xno5YXmPVy9FUmZ4uLnFB.jpg" class="card-img-top" alt="..."/>
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
                        <img style={{height: "50%"}} src="https://madtrek.com/wp-content/uploads/2023/08/Best-Places-To-Visit-In-Himachal-Pradesh-In-Summer-1.webp" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Himachal Pradesh</i></b></u></h5>
                            <p class="card-text">"Explore Himachal Pradesh, where the mountains meet the sky in breathtaking beauty."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2021/06/Jagannath-Temple-Bokaro-Jharkhand.jpg?resize=800%2C600&ssl=1" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Jharkhand</i></b></u></h5>
                            <p class="card-text">"Unravel the beauty of Jharkhand, from its verdant hills to vibrant communities."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="https://www.holidify.com/images/bgImages/MYSORE.jpg" class="card-img-top" style={{height: "50%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Karnataka</i></b></u></h5>
                            <p class="card-text">"Discover Karnataka, a state of ancient temples and modern marvels."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-md-2 '>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="https://static.wanderon.in/wp-content/uploads/2023/08/untitled-design-2023-08-31t173135.079-min.png" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Kerala</i></b></u></h5>
                            <p class="card-text">"Discover Kerala, God's Own Country, where nature's beauty abounds."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="https://www.tourmyindia.com/blog//wp-content/uploads/2021/08/Best-Places-to-Visit-in-Madhya-Pradesh.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Madhya Pradesh</i></b></u></h5>
                            <p class="card-text">"Experience Madhya Pradesh, a state of majestic forts and diverse wildlife."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/mumbai-maharashtra.jpg" class="card-img-top" style={{height: "50%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Maharashtra</i></b></u></h5>
                            <p class="card-text">"Explore Maharashtra, from the peaks of the Western Ghats to the shores of Mumbai."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="https://travelfromindia.com/assets/uploads/news-115.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Manipur</i></b></u></h5>
                            <p class="card-text">"Discover Manipur, the Jewel of India, where culture and nature shine brightly."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="https://moxtain.s3.ap-south-1.amazonaws.com/blogs/howtoreach%26besttimetovisitmeghalaya/meghalaya-tourism.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Meghalaya</i></b></u></h5>
                            <p class="card-text">"Discover Meghalaya, the Abode of Clouds, where nature's beauty is unparalleled."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="https://www.offbeatstays.in/wp-content/uploads/2021/01/Toipui_Tuipui_river_Mizoram_India.jpg" class="card-img-top" style={{width: "100%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Mizoram</i></b></u></h5>
                            <p class="card-text">"Discover Mizoram, the Land of the Highlanders, where culture and nature are inseparable."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="https://media.istockphoto.com/id/897229558/photo/dzukou-valley-nagaland-north-east-india.jpg?s=612x612&w=0&k=20&c=L3ly8zHzTnHh2US6ovvG5H79GExQuGK-7JYueiX8Y7c=" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Nagaland</i></b></u></h5>
                            <p class="card-text">"Discover Nagaland, the land of vibrant tribes and pristine landscapes."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="https://www.holidify.com/images/bgImages/KONARK.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Odisha</i></b></u></h5>
                            <p class="card-text">"Unravel the beauty of Odisha, from its sacred temples to tranquil beaches."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-md-2 col-lg-1'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="https://images.pexels.com/photos/574313/pexels-photo-574313.jpeg?cs=srgb&dl=pexels-uwc12-574313.jpg&fm=jpg" class="card-img-top" style={{width: "100%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Punjab</i></b></u></h5>
                            <p class="card-text">"Discover Punjab, where tradition meets the rhythms of Bhangra."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="https://www.tourmyindia.com/states/rajasthan/image/best-places-to-visit-rajasthan.webp" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Rajasthan</i></b></u></h5>
                            <p class="card-text">"Journey through Rajasthan, where grandeur and history come alive."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-md-2'>

                    </div>
                    <div className='col-lg-3' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="https://www.tourmyindia.com/blog/wp-content/uploads/2021/05/Best-Places-to-Visit-in-Sikkim.jpg" class="card-img-top" alt="..."/>
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
                        <img style={{height: "50%"}} src="https://media.assettype.com/outlooktraveller%2Fimport%2Foutlooktraveller%2Fpublic%2Fuploads%2Farticles%2Fexplore%2Ffiles%2F2016%2F05%2F210616122042-Hyderabad-small.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Telangana</i></b></u></h5>
                            <p class="card-text">"Unravel the beauty of Telangana, from its historic sites to bustling markets."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1'>

                    </div>
                    <div className='col-lg-3' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="https://www.tourmyindia.com/socialimg/tripura-touris.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Tripura</i></b></u></h5>
                            <p class="card-text">"Explore Tripura, where history, culture, and nature create a unique mosaic."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img src="https://www.clubmahindra.com/blog/media/section_images/visit-in-u-b6fa5a61e8c38c7.jpg" class="card-img-top" style={{height: "50%"}} alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>Uttrakhand</i></b></u></h5>
                            <p class="card-text">"Explore Uttarakhand, from the heights of the Himalayas to the banks of the Ganges."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-2'>

                    </div>
                    <div className='col-lg-3 col-md-5 col-sm-12' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/cover-image-of-Places-To-Visit-In-West-Bengal_13th-jan.jpg" class="card-img-top" alt="..."/>
                        <div class="card-body" className='mt-3 p-2'>
                            <h5 class="card-title"><u><b><i>West Bengal</i></b></u></h5>
                            <p class="card-text">"Explore West Bengal, from the peaks of the Himalayas to the deltas of the Ganges."</p>
                            <a href="#" class="btn btn-primary">Explore...</a>
                        </div>
                    </div>
                    <div className='col-lg-1 col-md-2'>

                    </div>
                    <div className='col-lg-3' class="card" style={{width: "18rem", border:"1px solid grey", borderRadius: "0.4rem", padding: "0"}}>
                        <img style={{height: "50%"}} src="https://www.tourmyindia.com/blog//wp-content/uploads/2020/12/Srinagar-Jammu-Kashmir-Feature.jpg" class="card-img-top" alt="..."/>
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