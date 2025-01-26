import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import { Helmet } from 'react-helmet';

const Statistics = () => {
    const data=useLoaderData()
    // console.log("datais", data);

    return (
        <div>
 <Helmet>
         <meta charset="utf-8" />
   <title>|Statistics</title>
   <meta name="description" content="This is home page" />
        </Helmet>
            <Header></Header>
            <h1>statasticks .....</h1>

        </div>
    );
};

export default Statistics;