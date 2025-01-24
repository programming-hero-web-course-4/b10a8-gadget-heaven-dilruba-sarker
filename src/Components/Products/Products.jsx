import { Link, useLoaderData } from "react-router-dom";



const Products = ({productData }) => {


const {id,product,image,name,price}=productData

    return (
        <div className="">

<div className="card h-66 w-44 shadow-xl ">
  <figure>
    <img className="h-36  rounded-xl "
      src={image}
      alt="" />
  </figure>
  <div className="flex flex-col justify-center items-center">
    <h2 className="card-title">{name}</h2>
    <p>Price:${price}</p>
   
     
    <Link to={`/products/${id}`}>
    <div className=" flex justify-center"> <button className="btn btn-primary">Details</button></div>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Products;