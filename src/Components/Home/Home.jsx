

import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import BannerContainer from "../BannerContainer/BannerContainer";
import Items from "../items/Items";




const Home = () => {

    
    return (

        
        <div className="">

<Helmet>
         <meta charset="utf-8" />
   <title>/homePage</title>
   <meta name="description" content="This is home page" />
        </Helmet>

            <BannerContainer></BannerContainer>
           
           
           <Items></Items>
        </div>
    );
};

export default Home;