import React from 'react';
import { Link } from 'react-router-dom';

function Miss({ className = 'missing-notice'}) {


    return (
        <div className={className}>

            <h1 className={`${className}__headline`}>We are missing this item at this moment...</h1>
            <h2><Link className={`${className}__link`} to={'/'}>Back Home</Link></h2>
        </div>

    );
}

export default Miss;