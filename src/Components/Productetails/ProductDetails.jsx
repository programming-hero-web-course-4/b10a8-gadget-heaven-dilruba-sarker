

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
