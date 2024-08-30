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
                    <div className='col-md-2 col-lg-3'>

                    </div>
                    <div className='col-md-8 col-lg-6 mt-5 tagline'>
                        <h1>
                            Dilwalon ki 
                            <i><b> Dilli...</b></i>
                        </h1>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default DelhiPage;