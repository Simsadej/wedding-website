import React from 'react-dom';
import {Link} from 'react-router-dom';
function PageNotFound() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/wedding/home'>Home</Link>
            <Link to='/wedding/confirm-attendance'>RSVP</Link>
            <Link to='/wedding/gift-registry'>RSVP</Link>
            <Link to='/wedding/faqs'>FAQs</Link>
        </div>
    )
}

export default PageNotFound;