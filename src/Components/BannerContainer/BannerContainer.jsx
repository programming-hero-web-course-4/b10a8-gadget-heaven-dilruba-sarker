import Banner from "../Banner/Banner";
import Header from "../Header/Header";


const BannerContainer = () => {
    return (
        <div className="bg-purple-600 w-5xl h-96 rounded-3xl mx-auto">
            <Header></Header>
            <Banner></Banner>
        </div>
    );
};

export default BannerContainer;
