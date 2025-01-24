import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const data=useLoaderData()
    // console.log("datais", data);

    return (
        <div>
            <h1>statasticks .....</h1>

        </div>
    );
};

export default Statistics;