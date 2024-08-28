import React from 'react';

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-md bg-body-primary" style={{height: "7rem", backgroundColor: "rgba(0,0,0,0.2)"}}>
                <div class="container-fluid">
                    <a class="navbar-brand" style={{width: "55%"}} to="/">
                        <img src='media/images/Khush2.jpg' alt='Olympiad specialist Logo' 
                        style={{width: "16%", cursor: "pointer", marginLeft: "2rem", borderRadius: "50%", border:"2px solid black"}}/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav" style={{marginRight: "auto"}}>
                            <li class="nav-item" className='ms-4'>
                                <a class="nav-link active" style={{color: "whitesmoke", fontWeight: "700", textDecoration: "underline", cursor: "pointer"}} aria-current="page" to="/signup">Home</a>
                            </li>
                            <li class="nav-item" className='ms-4'>
                                <a class="nav-link" style={{color: "whitesmoke", fontWeight: "700", textDecoration: "underline", cursor: "pointer"}}  to="/about">Packages</a>
                            </li>
                            <li class="nav-item" className='ms-4'>
                                <a class="nav-link" style={{color: "whitesmoke", fontWeight: "700", textDecoration: "underline", cursor: "pointer"}} to="/products">About</a>
                            </li>
                            <li class="nav-item" className='ms-4'>
                                <a class="nav-link" style={{color: "whitesmoke", fontWeight: "700", textDecoration: "underline", cursor: "pointer"}} to="/pricing">Helpline</a>
                            </li>
                            <li class="nav-item" className='ms-4'>
                                <a class="nav-link" style={{color: "whitesmoke", fontWeight: "700", textDecoration: "underline", cursor: "pointer"}} to="/support">Itinerary</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;