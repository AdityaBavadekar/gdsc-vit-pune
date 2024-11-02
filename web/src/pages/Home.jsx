import React, { useEffect } from 'react';
import './home.css'
import { Link } from 'react-router-dom';

const SimpleEventCard = ({ event }) => {
    return (
        <div className="card col-md-4 col-12 flex mb-2 d-flex center justify-content-center items-center gap-3 align-middle event-card">
            <div className="text-center">
                <img src={event.displayImage} alt='Event image' className='img-fluid '></img>
            </div>
            <p className='text-center fw-700 mt-2'>{event.name}</p>
            {
                event.isLive && <p className='event-status py-1 px-3 text-center fw-600 row rounded ms-2 my-auto live-indicator' style={{backgroundColor:'red', color: 'white'}}>Live now</p>
            }
        </div>
    )
}

const Home = () => {
    const [blogsData, setBlogsData] = React.useState([]);
    const [eventsData, setEventsData] = React.useState([]);

    React.useEffect(() => {        
        fetch('./data/events.json')
            .then(response => response.json())
            .then(data => setEventsData(data.slice(0, 3)));

        fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/dscvitpune')
            .then((response) => response.json())
            .then((data) => {
                const blogItems = data.items.slice(0, 3).map((item) => {
                    let imageUrl = item.thumbnail;
                    if (!imageUrl || imageUrl === '') {
                        imageUrl = item.content.match(/src="([^"]+)"/)[1];
                    } 
                    return {
                        author: item.author,
                        title: item.title,
                        link: item.link,
                        date: item.pubDate,
                        image: imageUrl
                    }
                })
                setBlogsData(blogItems);
            })

        const leadTextContainer = document.getElementById('lead-text-container')
        leadTextContainer.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 20;
            const y = (e.clientY / window.innerHeight) * 20;
            leadTextContainer.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
        })

        leadTextContainer.addEventListener('mouseleave', () => {
            leadTextContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';
        })

        const ftSwitcher = document.getElementById('ft-switcher');
        const ftSwitcherItems = ftSwitcher.getElementsByTagName('li');
        var currentActive = 0;
        ftSwitcherItems[currentActive].style.display = 'block';

        setInterval(() => {
            ftSwitcherItems[currentActive].style.display = 'none';
            if (currentActive === ftSwitcherItems.length - 1) {
                currentActive = -1;
            }
            currentActive++;
            ftSwitcherItems[currentActive].style.display = 'block';
        }, 3000)


    }, [])

    return (
        <div>
            <div className="py-5 px-2 vh-100 justify-content-center align-middle d-flex flex flex-column" id='lead-text-container'>
                <h1 className='display-1 fw-800 text-center w-full font-weight-bold lh-lg' id='lead-text-1'><span style={{color: 'blue'}}>D</span><span style={{color: 'red'}}>S</span><span style={{color: 'orange'}}>C</span> VIT Pune</h1>
                <h2 className='text-center lh-md fw-600 text-muted' id='lead-text-2'>Developer Student Clubs, Vishwakarma Institute of Technology, Pune</h2>
                <div className='h-25'></div>
            </div>
            <div className="py-5">
                <section className="container py-5 fs-3 text-center">
                    <p>
                        We are a community of developers and tech enthusiasts at VIT Pune. Our mission is to learn, share, and grow together by organizing workshops, hackathons, and other events.
                    </p>
                </section>
            </div>
            <div className='section-container'>
                <section className="container py-5" id='events'>
                    <h2 className='fw-700 py-5'>What we do?</h2>
                    <div className="container">
                        <ul>
                            <div className="container mb-5 card">
                                <ol className='font-animation text-center' id='ft-switcher'>
                                    <li>Technical workshops on machine learning, AI, web development, and more</li>
                                    <li>Hackathons to challenge students to innovate</li>
                                    <li>Study jams for collaborative learning on Google Developer products</li>
                                    <li>Guest lectures by industry experts</li>
                                    <li>Mentorship programs to guide students</li>
                                </ol>
                            </div>

                            <h6 className='header-p'>Creating a Collaborative Community</h6>
                            <p>The club promotes a collaborative environment, peer mentoring, and networking through coding meetups and hackathons.</p>
                            
                            <h6 className='header-p'>Skill Development and Training</h6>
                            <p>We organize workshops on web development, app development, machine learning, and cloud technologies. Practical, project-based learning prepares students for real-world applications.</p>
                            <h6 className='header-p'>Driving Innovation and Projects</h6>
                            <p>By hosting hackathons and supporting project incubation, DSC encourages students to develop impactful tech solutions, aligned with the UN's Sustainable Development Goals.</p>
                            
                            <h6 className='header-p'>Industry Exposure</h6>
                            <p>With guest lectures, and tech talks, DSC prepares students for industry by connecting them with professionals.</p>
                        </ul>
                    </div>
                </section>

                <div className="py-5">
                <section className="vh-100 border-top border-bottom jusitfy-content-center px-5 items-center align-middle fs-3 text-center d-flex flex flex-md-row flex-column" style={{backgroundColor:'white'}}>
                    <div className="container text-center my-auto float-card slide-from-bottom-card">
                        <img src='./colab_img.png' alt='Colab image' className='img-fluid'></img>
                    </div>
                    <div className="container my-auto slide-from-bottom-card">
                        <h3 className='my-auto text-center lh-sm mx-5 text-muted fs-4' id='lead-text-3'>“The strength of the team is each individual member. The strength of each member is the team.” – Phil Jackson</h3>
                        <div className="mt-3">
                            <Link to='/blogs' className="btn">View Team</Link>
                        </div>
                    </div>
                </section>
            </div>

                <section className="container py-5 slide-from-right-card" id='events'>
                    <h2 className='fw-700 py-5'>Our Events</h2>
                    <div className="container mt-5 flex flex-md-row flex-column d-flex gap-3">
                        {
                            eventsData.map((event) => <SimpleEventCard event={event} />)
                        }
                    </div>
                    <div className="mt-3 container card">
                        <Link to='/events' className="btn">View all events</Link>
                    </div>
                </section>

                <section className="container py-5 slide-from-left-card" id='blogs'>
                    <h2 className='fw-700 py-5'>Blogs</h2>
                    <div className="container mt-5 flex flex-md-row flex-column d-flex gap-3">
                        {
                            blogsData.map((blog) => (
                                <a className="card col-md-4 text-center col-12 text-decoration-none blog-card" href={blog.link} target='_blank'>
                                    <img src={blog.image} alt='Blog image' className='img-fluid bg-dark'></img>
                                    <div className="container">
                                        <p className='fw-700'>{blog.title}</p>
                                        <p>By {blog.author}</p>
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                    <div className="mt-3 container card">
                        <Link to='/blogs' className="btn">View all blogs</Link>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;