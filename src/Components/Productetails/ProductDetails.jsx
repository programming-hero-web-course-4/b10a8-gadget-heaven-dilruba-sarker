import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import { FaRegStar, FaSquareFull } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { TbHeartShare, TbShoppingCart } from 'react-icons/tb';

const ProductDetails = () => {
    const data= useLoaderData()
    const {id}= useParams()
    const product=data.find(product=>product.id==id)
    
      const {product:nam,image,name,price,stockStatus,
        rating,
        camera,description}=product
    return (
        <div className='w-5xl mx-auto ' >
           <Header></Header>

<div className='absolute'>
<div className=' w-5xl h-44 mx-auto bg-purple-600 text-center text-white'>
    <h1 className='text-3xl font-bold'>Product Details</h1>
    <div className='w-3xl mx-auto'><p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p></div>
</div>
    {/* deta */}
    <div className='flex bg-white w-xl gap-10 shadow-2xl mx-auto rounded-xl -mt-20 z-1 relative '>
<div className='rounded-xl m-2'><img className='w-96 h-48 flex items-center justify-center' src={image} alt="" /></div>
<div>
    <h1 className='text-2xl font-bold'>{name}</h1> 
    <h2 className='xl'>Price:${price}</h2>
   
    <h3 className='border-2 w-32 border-blue-600 rounded-xl text-center text-blue-600'>{stockStatus}</h3>
    <h4>{camera}</h4>
    <p className='text-2xl'>Specification:</p>
    <p>{description}</p>
<div>
<p className='2xl font-bold flex items-center  gap-2'>rating: <FaSquareFull /></p>
</div>
<div className='flex gap-8 items-center'>
<div className='flex '>
    <p className=' flex text-yellow-400'><FaStar /> <FaStar /> <FaStar /> <FaStar />  </p>
<p><FaRegStar /></p>
<div>

</div>

</div>
<h1 className='w-10  rounded-3xl shadow-3xl'>{rating}</h1>
</div>

<div className='flex items-center gap-4'>
<button className="btn bg-purple-600 text-white rounded-3xl">
  Add to Cart
  <TbShoppingCart />
 
</button>
<p className=' bg-blue-100  rounded-3xl shadow-5xl p-4  '><TbHeartShare /></p>
</div>
</div>

           </div>
</div>



          

           
        </div>
    );
};

export default ProductDetails;