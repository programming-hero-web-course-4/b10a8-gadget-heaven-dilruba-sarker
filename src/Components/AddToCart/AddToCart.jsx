

import React from "react";
import { MdDeleteForever } from "react-icons/md";

const AddToCart = ({ cart }) => {
  const { name, image, price, description } = cart;

  return (
    <div className="w-4xl bg-amber-100 p-8 shadow-2xl flex justify-between gap-10 mb-10 rounded-xl">
      <div>
        <img className="w-48 h-48 object-cover" src={image} alt={name} />
      </div>
      <div>
        <h1 className="text-xl font-bold">{name}</h1>
        <p>{description}</p>
        <h1 className="text-md font-bold">Price: ${price}</h1>
      </div>
      <div className="text-2xl text-red-600 flex items-center">
        <MdDeleteForever />
      </div>
    </div>
  );
};

export default AddToCart;

