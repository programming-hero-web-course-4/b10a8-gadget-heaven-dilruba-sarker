
import { Link } from 'react-router-dom';
import image from '../../assets/banner.jpg'
const Banner = () => {
    return (
       <>
    <div className='w-4xl h-3xl mx-auto ' >
    <div className="w-4xl text-center ">
     <h1 className="w-2xl text-4xl mx-auto text-white font-bold mb-4">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
     <p className="w-3xl mx-auto text-white mb-4">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
     
     <Link to="/dashboard"><div className=" mb-4"><button className="text-purple-700 bg-amber-50 rounded-3xl p-2">Shop Now</button></div></Link>
     </div>
     <div className=' w-2xl mx-auto '>
        <img className='w-xl max-h-72 mx-auto rounded-3xl ' src={image} alt="" />
     </div>
    </div>
       </> 
    );
};

export default Banner;