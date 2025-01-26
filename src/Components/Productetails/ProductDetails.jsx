// import React from 'react';
// import { useLoaderData, useParams } from 'react-router-dom';
// import Header from '../Header/Header';
// import { FaRegStar, FaSquareFull } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";
// import { TbHeartShare, TbShoppingCart } from 'react-icons/tb';
// import { addToLs } from '../../Utility/AddToLs';
// import { createContext } from 'react';
// export const productContext=createContext()
// export const LevelContext = createContext(1);
// const ProductDetails = () => {
//     const data= useLoaderData()
//     const {id}= useParams()
//     const product=data.find(product=>product.id==id)
    
//       const {product:nam,image,name,price,stockStatus,
//         rating,id:newId,
//         camera,description}=product

// const handleAddtoCart=id=>{
//     addToLs(id)
// }
//         return (
//         <div className='w-5xl mx-auto ' >
//            <Header></Header>

// <div className='absolute'>
// <div className=' w-5xl h-44 mx-auto bg-purple-600 text-center text-white'>
//     <h1 className='text-3xl font-bold'>Product Details</h1>
//     <div className='w-3xl mx-auto'><p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p></div>
// </div>
//     {/* deta */}
//     <div className='flex bg-white w-xl gap-10 shadow-2xl mx-auto rounded-xl -mt-20 z-1 relative '>
// <div className='rounded-xl m-2'><img className='w-96 h-48 flex items-center justify-center' src={image} alt="" /></div>
// <div>
//     <h1 className='text-2xl font-bold'>{name}</h1> 
//     <h2 className='xl'>Price:${price}</h2>
   
//     <h3 className='border-2 w-32 border-blue-600 rounded-xl text-center text-blue-600'>{stockStatus}</h3>
//     <h4>{camera}</h4>
//     <p className='text-2xl'>Specification:</p>
//     <p>{description}</p>
// <div>
// <p className='2xl font-bold flex items-center  gap-2'>rating: <FaSquareFull /></p>
// </div>
// <div className='flex gap-8 items-center'>
// <div className='flex '>
//     <p className=' flex text-yellow-400'><FaStar /> <FaStar /> <FaStar /> <FaStar />  </p>
// <p><FaRegStar /></p>
// <div>

// </div>

// </div>
// <h1 className='w-10  rounded-3xl shadow-3xl'>{rating}</h1>
// </div>

// <div  className='flex items-center gap-4'>
// <button onClick={()=>handleAddtoCart(newId)} className="btn bg-purple-600 text-white rounded-3xl">
//   Add to Cart
//   <TbShoppingCart />
 
// </button>
// <p onClick={()=>handleAddtoCart(newId)} className=' bg-blue-100  rounded-3xl shadow-5xl p-4  '><TbHeartShare /></p>
// </div>
// </div>

//            </div>
// </div>



          

           
//         </div>
//     );
// };

// export default ProductDetails;

// import React from "react";
// import { useLoaderData, useParams } from "react-router-dom";
// import Header from "../Header/Header";
// import { TbHeartShare, TbShoppingCart } from "react-icons/tb";
// import { addToLocalStorage } from "../../Utility/AddToLs";

// const ProductDetails = () => {
//   const data = useLoaderData();
//   const { id } = useParams();
//   const product = data.find((product) => product.id == id);

//   const { name, image, price, stockStatus, rating, description, id: newId } =
//     product;

//   const handleAddToCart = (id) => {
//     addToLocalStorage("cart", id);
//   };

//   const handleAddToWishList = (id) => {
//     addToLocalStorage("wishList", id);
//   };

//   return (
//     <div className="w-5xl mx-auto">
//       <Header></Header>
//       <div className="w-5xl h-44 mx-auto bg-purple-600 text-center text-white">
//         <h1 className="text-3xl font-bold">Product Details</h1>
//         <p>Explore the latest gadgets to elevate your experience.</p>
//       </div>

//       <div className="flex bg-white w-xl gap-10 shadow-2xl mx-auto rounded-xl -mt-20 relative p-6">
//         <div>
//           <img className="w-96 h-48" src={image} alt={name} />
//         </div>
//         <div>
//           <h1 className="text-2xl font-bold">{name}</h1>
//           <h2 className="text-xl">Price: ${price}</h2>
//           <h3 className="text-blue-600">{stockStatus}</h3>
//           <p>{description}</p>
//           <div className="flex items-center gap-4 mt-4">
//             <button
//               onClick={() => handleAddToCart(newId)}
//               className="btn bg-purple-600 text-white rounded-3xl px-4 py-2"
//             >
//               Add to Cart <TbShoppingCart />
//             </button>
//             <button
//               onClick={() => handleAddToWishList(newId)}
//               className="bg-blue-100 rounded-3xl shadow-lg px-4 py-2"
//             >
//               <TbHeartShare />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import { TbHeartShare, TbShoppingCart } from "react-icons/tb";
import { addToLocalStorage } from "../../Utility/AddToLs";

const ProductDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const product = data.find((product) => product.id == id);

  const { name, image, price, stockStatus, rating, description, id: newId } =
    product;

  // State to disable the "Add to Cart" and "Add to Wishlist" buttons
  const [isCartDisabled, setIsCartDisabled] = useState(false);
  const [isWishListDisabled, setIsWishListDisabled] = useState(false);

  // Handle adding to the cart
  const handleAddToCart = (id) => {
    addToLocalStorage("cart", id);
    setIsCartDisabled(true); // Disable the button after adding to the cart
  };

  // Handle adding to the wishlist
  const handleAddToWishList = (id) => {
    addToLocalStorage("wishList", id);
    setIsWishListDisabled(true); // Disable the button after adding to the wishlist
  };

  return (
    <div className="w-5xl mx-auto">
      <Header></Header>
      <div className="w-5xl h-44 mx-auto bg-purple-600 text-center text-white">
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p>Explore the latest gadgets to elevate your experience.</p>
      </div>

      <div className="flex bg-white w-xl gap-10 shadow-2xl mx-auto rounded-xl -mt-20 relative p-6">
        <div>
          <img className="w-96 h-48" src={image} alt={name} />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <h2 className="text-xl">Price: ${price}</h2>
          <h3 className="text-blue-600">{stockStatus}</h3>
          <p>{description}</p>
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => handleAddToCart(newId)}
              className="btn bg-purple-600 text-white rounded-3xl px-4 py-2"
              // disabled={isCartDisabled} // Disable the button if it is clicked
            >
              {/* {isCartDisabled ? "Added to Cart" : "Add to Cart"}  */}
              Add to Cart
              <TbShoppingCart />
            </button>
            <button
              onClick={() => handleAddToWishList(newId)}
                 className="btn bg-purple-600 text-white rounded-3xl px-4 py-2"
              disabled={isWishListDisabled} // Disable the button if it is clicked
            >
              {/* {isWishListDisabled ? "Added to Wishlist" : "Add to Wishlist"} */}
              
              <TbHeartShare />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
