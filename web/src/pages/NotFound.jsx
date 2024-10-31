import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="container p-5">
            <h1 className="display-1 fw-800 lh-lg py-2">404</h1>
            <p className="font-monospace">Oops! The page you're looking for has been hacked away.</p>
            <p className="not-found-suggestion">Try checking the URL or go back to the homepage.</p>
            <Link to="/" className="btn">Go back to homepage</Link>
        </div>
    );
};

export default NotFound;