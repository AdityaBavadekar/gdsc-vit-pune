import React, { useEffect, useState } from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const upcomingEventsData = [
  {
    "name": "devX",
    "tagline": "CODE. CREATE. CONQUER.",
    "organizedBy": "Developer Student Clubs, VIT Pune",
    "image": "/events/27/displayImage.png",
    "date": "26 March 2022",
    "baseColor": "#3a0054",
    "events": [
      {
        "name": "Create-A-Thon",
        "presentedBy": "PNQxZo & VIT Pune",
        "dates": "Not yet announced",
        "registrationOpen": true,
        "registrationLink": "https://lu.ma/o75z1rxs",
        "poweredBy": "Morphic Studios",
        "venue": "Conference Hall, VIT Pune",
        "details": "Hands-on Generative AI training, Master Morphic's animation workflow, Collaborate and build, Showcase your AI creation"
      },
      {
        "name": "Speaker Session - Data Solutions & App Dev",
        "dates": "25 & 26 March",
        "registrationOpen": true,
        "registrationLink": "https://forms.gle/TJPy1rQ6boK8bEGG8",
        "venue": "1325 and 1328",
        "details": "Insightful speaker sessions on data solutions and app development by industry experts."
      },
      {
        "name": "Speaker Session - AI/ML, Web & Web3",
        "dates": "27 & 28 March",
        "registrationOpen": true,
        "registrationLink": "https://forms.gle/TJPy1rQ6boK8bEGG8",
        "venue": "1325 and 1328",
        "details": "Decode the vast internet, train AI, and unlock the future of AIML, Web, and Web3."
      }
    ]
  }
];

const UpcomingEventCard = ({ event }) => {
  return (
    <div className="card border-0 shadow-sm mb-4 overflow-hidden transition-all p-4"
      style={{
        backgroundColor: '#E0F2FF',
        borderRadius: '1rem',
        transition: 'all 0.3s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
      }}>
      <div className="row g-0">

        <div className="col-md-3 d-flex align-items-center justify-content-center p-3">
          <div className="bg-white border border-primary rounded-3 text-center p-3 shadow-sm"
            style={{ minWidth: '80px' }}>
            <div className="fw-bold fs-6">{event.dates}</div>
          </div>
        </div>

        <div className="col-md-6 p-3">
          <div className="d-flex flex-column h-100 justify-content-center">
            <h4 className="fw-semibold mb-1">{event.name}</h4>
            <p className="text-muted mb-2 fs-6">Venue: {event.venue}</p>
            <p className="text-muted mb-2">{event.details}</p>
            <div className="d-flex align-items-center text-secondary small gap-2 mt-auto">
              <i className="bi bi-clock text-primary"></i>
              <span>{event.time}</span>

              {event.location && (
                <>
                  <span className="mx-2">•</span>
                  <i className="bi bi-geo-alt text-primary"></i>
                  <span>{event.location}</span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-3 d-flex align-items-center justify-content-center p-3">
          {event.registrationOpen ? (
            <a
              href={event.registrationLink}
              target='_blank rel="noreferrer'
              className="btn btn-primary text-white rounded-pill px-4 py-2 fw-semibold"
              style={{
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 6px rgba(13, 110, 253, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 6px 8px rgba(13, 110, 253, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(13, 110, 253, 0.2)';
              }}
            >
              Register Now
            </a>
          ) : (
            <span className="badge bg-secondary p-2">Coming Soon</span>
          )}
        </div>
      </div>
    </div>
  );
};

const SimpleEventCard = ({ event }) => {
  return (
    <div className="card col-md-4 col-12 flex mb-2 d-flex center justify-content-center items-center align-middle event-card">
      <div className="text-center">
        <img src={event.displayImage} alt='Event image' className='img-fluid '></img>
      </div>
      <p className='text-container'>{event.name}</p>
      {
        event.isLive && <p className='event-status py-1 px-3 fw-600 row rounded my-auto live-indicator' style={{ backgroundColor: 'red', color: 'white' }}>Live now</p>
      }
    </div>
  )
}

const Home = () => {
  const [blogsData, setBlogsData] = React.useState([]);
  const [eventsData, setEventsData] = React.useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState(upcomingEventsData);

  React.useEffect(() => {
    fetch('./data/events.json')
      .then(response => response.json())
      .then(data => {
        setEventsData(data.slice(0, 3));
      });

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
  }, [])

  return (
    <div>
      <div className="py-5 px-2 vh-100 justify-content-center align-middle d-flex flex flex-column gap-0" id='lead-text-container'>
        <h1 className='display-1 fw-800 text-center w-full font-weight-bold lh-lg' id='lead-text-1'><span style={{ color: 'blue' }}>D</span><span style={{ color: 'red' }}>S</span><span style={{ color: 'orange' }}>C</span> VIT Pune</h1>
        <h2 className='text-center lh-md fw-600 text-muted' id='lead-text-2'>Developer Student Clubs, Vishwakarma Institute of Technology, Pune</h2>
        <div className='h-25'></div>
      </div>
      <div className="py-5">
        <section className="py-5 fs-3 text-center">
          <div className="container">
            <img src='./team_work.png' alt='Tea work image' className='img-fluid rounded slide-from-bottom-card'></img>
            <p className='slide-from-bottom-card'>
              We are a community of developers and tech enthusiasts at VIT Pune. Our mission is to learn, share, and grow together by organizing workshops, hackathons, and other events.
            </p>
          </div>
        </section>
      </div>


      <div className="py-5">
        <section>

          <div className="ms-5 me-5 cotainer">
            <h2 className='fw-700 display-4 py-5 text-center'>Upcoming Events</h2>
            {
              upcomingEvents.length === 0 && (
                <div className="text-center">
                  <p className="text-muted">No upcoming events</p>
                </div>
              )
            }
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{}}
              >
                <div className="container text-center py-5 animate__animated animate__fadeIn">
                  <div className="py-4 px-3 mb-4 rounded-4 d-flex justify-content-evenly align-items-center"
                    style={{
                      background: 'linear-gradient(135deg,rgb(139, 187, 230) 0%, #e0f2ff 100%)',
                      borderLeft: '5px solid #0d6efd'
                    }}>

                    <div>
                      <h2 className='fw-bold text-black mb-2 display-4'>{event.name}</h2>
                      <h4 className='text-muted fst-italic my-5'>{event.tagline}</h4>
                    </div>
                    <div className="position-relative mb-4">
                      <img
                        src={event.image}
                        alt={event.name}
                        className='img-fluid rounded-4 shadow'
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                      />
                    </div>
                  </div>

                  <div className="container slide-from-bottom-card">
                    {
                      event.events.map((event) => (
                        <UpcomingEventCard event={event} />
                      ))
                    }
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </section>
      </div>

      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold display-5 text-center mb-5">What We Do?</h2>
          <div className="d-none font-animation-holder mb-5 border rounded p-4 bg-white shadow-sm">
            <ol className="list-unstyled font-animation text-center" id="ft-switcher">
              <li>Technical workshops on machine learning, AI, web development, and more</li>
              <li>Hackathons to challenge students to innovate</li>
              <li>Study jams for collaborative learning on Google Developer products</li>
              <li>Guest lectures by industry experts</li>
              <li>Mentorship programs to guide students</li>
            </ol>
          </div>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0 rounded-4 p-4 bg-white hover-shadow">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-people-fill text-primary fs-2 me-3"></i>
                  <h5 className="mb-0">Creating a Collaborative Community</h5>
                </div>
                <p className="text-muted">
                  We promote a collaborative environment, peer mentoring, and networking through coding meetups and hackathons.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0 rounded-4 p-4 bg-white hover-shadow">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-laptop text-success fs-2 me-3"></i>
                  <h5 className="mb-0">Skill Development and Training</h5>
                </div>
                <p className="text-muted">
                  Workshops on web, app development, ML, and cloud. Project-based learning to prepare students for real-world applications.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0 rounded-4 p-4 bg-white hover-shadow">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-lightbulb-fill text-warning fs-2 me-3"></i>
                  <h5 className="mb-0">Driving Innovation and Projects</h5>
                </div>
                <p className="text-muted">
                  Hosting hackathons and supporting project incubation to solve real-world problems aligned with the UN's SDGs.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow-sm border-0 rounded-4 p-4 bg-white hover-shadow">
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-briefcase-fill text-danger fs-2 me-3"></i>
                  <h5 className="mb-0">Industry Exposure</h5>
                </div>
                <p className="text-muted">
                  Guest lectures and tech talks connect students with professionals, preparing them for industry standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="py-5">
        <section className="vh-100 border-top border-bottom jusitfy-content-center px-5 items-center align-middle fs-3 text-center d-flex flex flex-md-row flex-column" style={{ backgroundColor: 'white' }}>
          <div className="container text-center my-auto float-card">
            <img src='./colab_img.png' alt='Colab image' className='img-fluid'></img>
          </div>
          <div className="container my-auto slide-from-bottom-card">
            <h3 className='my-auto text-center lh-sm text-muted fs-4' id='lead-text-3'>“The strength of the team is each individual member. The strength of each member is the team.” – Phil Jackson</h3>
            <div className="mt-3">
              <Link to='/team' className="btn">View Team</Link>
            </div>
          </div>
        </section>
      </div>

      <section className="py-5" id='events'>
        <div className="container">
          <h2 className='fw-700 display-4 py-5'>Our Events</h2>
          <div className="container mt-5 slide-from-right-card flex flex-md-row flex-column d-flex gap-3">
            {
              eventsData.map((event) => <SimpleEventCard event={event} />)
            }
          </div>
          <div className="mt-3 container card">
            <Link to='/events' className="btn">View all events</Link>
          </div>
        </div>
      </section>

      <section className="py-5" id='blogs'>
        <div className="container">
          <h2 className='fw-700 display-4 py-5'>Blogs</h2>
          <div className="container slide-from-left-card mt-5 flex flex-md-row flex-column d-flex gap-3">
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
        </div>
      </section>
    </div>
  );
};

export default Home;