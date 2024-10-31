import React from 'react';

const Events = () => {
    const [eventsData, setEventsData] = React.useState([]);

    React.useEffect(() => {
        fetch('./data/events.json')
            .then(response => response.json())
            .then(data => setEventsData(data));
    }, []);

    return (
        <div>
            <h1 className='text-center display-3 fw-700 lh-md py-5'>GDSC VIT Pune Events</h1>
            <ul style={{listStyleType: 'none'}}>
                {eventsData.map(event => (
                    <li key={event.id} className='mb-3'>
                        <div className="container card py-5 px-4">
                            <h2 className='py-2 px-1 fw-700'>{event.name}</h2>
                            {
                                event.isLive &&
                                <p className='live-indicator col-5 col-md-2 col-lg-1 justify-content-center d-flex flex py-1 ms-2 fw-600 rounded' style={{backgroundColor: 'red', color: 'white'}}>Live now</p>
                            }
                            <div className="images container justify-content-center align-middle items-center py-2">
                                {event.images.map((image, index) => (
                                    <img key={index} src={image} className='img-fluid w-50'/>
                                ))}
                            </div>
                            <p>{
                                (() => {
                                    const [day, month, year] = event.date.split('-');
                                    const date = new Date(year, month - 1, day);
                                    return date.toDateString();
                                })()
                            }</p>
                            <p>{event.description}</p>
                            {
                                event.link &&
                                <a href={`${event.link}`}>View more</a>
                            }
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;