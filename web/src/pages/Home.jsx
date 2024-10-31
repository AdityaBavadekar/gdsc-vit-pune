import React from 'react';
import './home.css'

const Home = () => {
    return (
        <div>
            <div className="py-5 vh-100 justify-content-center align-middle d-flex flex-column" id='lead-text-container'>
                <h1 className='display-1 fw-800 text-center w-full font-weight-bold lh-lg' id='lead-text-1'><span style={{color: 'blue'}}>D</span><span style={{color: 'red'}}>S</span><span style={{color: 'orange'}}>C</span> VIT Pune</h1>
                <h2 className='text-center fw-600 text-muted' id='lead-text-2'>Developer Student Clubs, Vishakarma Institute of Technology, Pune</h2>
                <div className='h-25'></div>
            </div>
            <div className="py-5">
                <section className="container fs-3 text-center">
                    <p>
                        We are a community of developers and tech enthusiasts at VIT Pune. Our mission is to learn, share, and grow together by organizing workshops, hackathons, and other events.
                    </p>
                </section>
            </div>
            <div>
                <section className="container">
                    <h2 className='fw-700 py-5'>Upcoming Events</h2>
                    <ul style={{listStyleType: 'none'}} className='row gap-3 m-0 p-0'>
                        <li className='col-md-4 col-sm-12 col-lg-3'>
                            <a href="#" className="event-card card p-4 text-decoration-none">
                                <p className='event-name fw-700 fs-4'>Web Development Workshop</p>
                                <div className="container d-flex flex my-auto align-middle items-center">
                                    <p className='event-timestamp col-md row-sm my-auto'>25th Oct</p>
                                    <p className='event-status py-1 px-3 fw-600 row rounded ms-2 my-auto live-indicator' style={{backgroundColor:'red', color: 'white'}}>Live now</p>
                                </div>
                            </a>
                        </li>
                        <li className='col-md-4 col-sm-12  col-lg-3'>
                            <a href="#" className="event-card card p-4 text-decoration-none">
                                <p className='event-name fw-700 fs-4'>Web Development Workshop</p>
                                <div className="container d-flex flex flex-row my-auto align-middle items-center">
                                    <p className='event-timestamp col my-auto'>25th Oct</p>
                                    <p className='event-status py-1 px-3 row rounded ms-2 my-auto' style={{backgroundColor:'blue', color: 'white'}}>Upcoming</p>
                                </div>
                            </a>
                        </li>
                        <li className='col-md-4 col-sm-12 col-lg-3'>
                            <a href="#" className="event-card card p-4 text-decoration-none">
                                <p className='event-name fw-700 fs-4'>Web Development Workshop</p>
                                <div className="container d-flex flex flex-row my-auto align-middle items-center">
                                    <p className='event-timestamp col my-auto'>25th Oct</p>
                                    <p className='event-status py-1 px-3 row rounded ms-2 my-auto' style={{backgroundColor:'blue', color: 'white'}}>Upcoming</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Home;