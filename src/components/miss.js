import React from 'react';
import { Link } from 'react-router-dom';

function Miss({ ...restProps }) {


    return (
        <div className={"missing-notice"}  >

            <h1>We are missing this item at this moment...</h1>
            <Link to={'/'}>Back Home</Link>
        </div>

    );
}

export default Miss;