import { useEffect, useState } from "react";

import Products from "../Products/Products";



const Items = () => {
// all the products of data.json
    const [allProducts,setAllProducts]=useState([]) 
    // all the products after filtered
     const [products,setProducts]=useState([])
     

     useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=> 
        {
          setProducts(data)
          setAllProducts(data)
        }
        )
     },[])
   
     
     const handleFilter=(category)=>{
     
        const filteredProduct=allProducts.filter(cureProduct=>cureProduct.category===category)
        setProducts(filteredProduct);
     }
    return (
       <div className="mt-56 flex flex-col lg:flex-row justify-center w-5xl mx-auto">

        {/*btn  */}
<div className="grid grid-cols-1 gap-4 w-xl h-56 mx-auto justify-center items-center">
     
    
     <button onClick={()=>setProducts(allProducts)} className="btn btn-wide focus:bg-violet-700 active:bg-violet-700">ALL Products</button>
            <button onClick={()=>{handleFilter('laptop')}} className="btn btn-wide focus:bg-violet-700 active:bg-violet-700">Laptops</button>
            <button onClick={()=>{handleFilter('phone')}}  className="btn btn-wide focus:bg-violet-700 active:bg-violet-700">Phones</button>
            <button onClick={()=>{handleFilter('accessories')}}  className="btn btn-wide focus:bg-violet-700 active:bg-violet-700">Accessories</button>
            <button  onClick={() => handleFilter("smartwatch")} className="btn btn-wide focus:bg-violet-700 active:bg-violet-700">Smart Watches</button>
            
            <button onClick={() => handleFilter("macbook")} className="btn btn-wide focus:bg-violet-700 active:bg-violet-700">MacBook</button>
            
            <button   onClick={() => handleFilter("iPhone")} className="btn btn-wide focus:bg-violet-700 active:bg-violet-700">Iphone</button>
</div>

 {/* details product */}
     <div className="w-4xl ml-28 lg:-ml-44 mt-36 lg:mt-0 ">
        <h1 className="text-2xl font-bold flex justify-center mb-4">Explore Cutting-Edge Gadgets</h1>
        

       <div>
        {/* jodi filter kore kono data na thake tobe no data found */}
{products.length===0?
<div><h1 className="text-center text-red-500">No data found</h1></div>:
  /* jodi filter kore kono data  thake tobe */
<div className=" grid grid-cols-2 mr-0 lg:mr-12 lg:grid-cols-4 gap-16 ">
     
     {products.map((productData,idx)=><Products key={idx} productData={productData}></Products>)}
        </div>

}

       </div>
        </div>  
     
    
       </div>
    );
};

export default Items;



