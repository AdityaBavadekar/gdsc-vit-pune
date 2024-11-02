import React from 'react';
import './events.css';

const EventCard = ({event, index}) => {
    return (
        <li key={event.id} className='mb-3 event-full-card'>
            <div className="container py-5 px-4">
                <h2 className='fw-700 event-name'>{event.name}</h2>
                {
                    event.isLive &&
                    <p className='live-indicator col-5 col-md-2 col-lg-1 justify-content-center d-flex flex py-1 ms-2 fw-600 rounded' style={{backgroundColor: 'red', color: 'white'}}>Live now</p>
                }
                
                <div className="text-center py-2">
                    <div className="carousel-holder">
                        <div className="carousel-wrapper">
                            {
                                event.images.map((image, innerIndex) => {
                                    return (
                                        <div key={innerIndex} className={"carousel-item justify-content-center d-flex " + (innerIndex == 0 ? "active" : "")}>
                                            <img key={innerIndex} src={'../'+image} className='d-block w-50' />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <p>{
                    event.date && <p>{event.date}</p>
                }</p>
                <p>{event.description}</p>
                {
                    event.link &&
                    <a href={`${event.link}`}>View more</a>
                }
            </div>
        </li>
    )
}

const Events = () => {
    const [eventsData, setEventsData] = React.useState([]);

    React.useEffect(() => {
        document.title = 'Events - ' + document.title;
        
        fetch('../data/events.json')
            .then(response => response.json())
            .then(data => setEventsData(data));

    }, []);
    

    return (
        <div>
            <h1 className='text-center display-3 fw-700 lh-md py-5'>GDSC VIT Pune Events</h1>
            <ul className='events-full-container'>
                {eventsData.map((event, index) => <EventCard event={event} index={index} key={index}/>)}
            </ul>
        </div>
    );
};

export default Events;