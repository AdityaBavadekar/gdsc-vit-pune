import React from 'react';
import './about.css'

const About = () => {
    return (
        <div className='container'>
            <div className="container py-5">
                <div className="container py-4">
                    <img src='/workshop1.png' alt='Wordshop Picture' className='w-25 img-1' />
                    <img src='/workshop2.png' alt='Wordshop Picture' className='w-25 img-2' />
                    <img src='/workshop4.png' alt='Wordshop Picture' className='w-25 img-3' />
                    <img src='/workshop5.png' alt='Wordshop Picture' className='w-25 img-4' />
                </div>
                <div className="py-5 mt-5 container w-full justify-content-center d-flex flex">
                    <img src='/members.png' alt='Workshop Picture' className='img-fluid' />
                </div>
                <h1 className='text-center display-3 fw-700 lh-md py-5'>About</h1>
                <p className='fs-4'>
                    Developer Student Clubs (DSC) are community groups for college and university students interested in Google developer technologies.
                </p>
                <p className='fs-4'>
                    We are a community of passionate developers and technologists dedicated to helping students build their skills, create innovative projects, and connect with like-minded peers.
                </p>

                <div className='mt-5'>
                    <h2 className='py-3 fw-600 text-center'>What we do?</h2>
                    <div className="mt-3 mx-0 px-0 d-flex flex-md-row flex-column gap-4 justify-content-center items-center">
                        <p className='fs-5 text-center card card-cd col-md p-4 col-sm-12' id='card-1'>
                            <i class="ri-calendar-event-fill display-5 my-3 pb-3" style={{ color: 'blue' }}></i>
                            We organize a variety of events and workshops throughout the year, covering a wide range of domains.
                        </p>
                        <p className='fs-5 text-center card card-cd p-4 col-md col-sm-12' id='card-2'>
                            <i class="ri-team-fill display-5 my-3 pb-3" style={{ color: 'orange' }}></i>
                            We also collaborate with industry experts to bring you exclusive insights and opportunities.
                        </p>
                        <p className='fs-5 text-center card card-cd p-4 col-md col-sm-12 ' id='card-3'>
                            <i class="ri-focus-line display-5 my-3 pb-3" style={{ color: 'green' }}></i>
                            Our goal is to help you learn, grow, and connect with the tech community.
                        </p>
                    </div>
                </div>

                <div className='mt-5'>
                    <h2 className='py-3 fw-600 text-center'>Domains</h2>
                    <div className="mt-4 container d-flex flex-md-row flex-column gap-5 justify-content-center">
                        <div className="card p-4 col-md col-sm-12"  style={{backgroundColor:'lightgreen ', borderRadius: '18px'}}>
                            <h3 className='fw-400 rounded fs-4 p-3 text-center'>Technical</h3>
                            <ul className='py-3 opacity-75'>
                                <li>Web Development</li>
                                <li>App Development</li>
                                <li>AI/ML</li>
                                <li>Web 3</li>
                            </ul>
                        </div>
                        <div className="card p-4 col-md col-sm-12"  style={{backgroundColor:'lightblue', borderRadius: '18px'}}>
                            <h3 className='fw-400 fs-4 rounded p-3 text-center'>Non-Technical</h3>
                            <ul className='py-3 opacity-75'>
                                <li>Management</li>
                                <li>Content</li>
                                <li>Multimedia</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;