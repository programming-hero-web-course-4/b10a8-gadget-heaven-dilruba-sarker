
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import AddToCart from "../AddToCart/AddToCart";
import { getStoredData } from "../../Utility/AddToLs";
import { TbSortDescending2 } from "react-icons/tb";
import {Helmet} from "react-helmet";
const Dashboard = () => {
  const allProductData = useLoaderData() || [];
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [activeTab, setActiveTab] = useState("cart");
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch data based on the active tab
    const storedData = getStoredData(activeTab) || [];
    const displayData = allProductData.filter((data) => storedData.includes(data.id));
    setFilteredProduct(displayData);

    // Calculate total price
    const calculatedPrice = displayData.reduce((acc, item) => acc + item.price, 0);
    setTotalPrice(calculatedPrice);
  }, [activeTab, allProductData]);

  const handleSort = (key) => {
    const sortedProducts = [...filteredProduct].sort((a, b) => a[key] - b[key]);
    setFilteredProduct(sortedProducts);
  };

  const handlePurchaseClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setTotalPrice(0); 
    // Reset total price
    setFilteredProduct(0)
  };

  return (
    <div>

<div>
           <Helmet>
         <meta charset="utf-8" />
   <title>/dashboard</title>
   <meta name="description" content="This is home page" />
        </Helmet>

  </div>

      {/* Header with item count */}
      <Header data={filteredProduct.length} />

      {/* Hero Section */}
      <div className="w-5xl h-44 mx-auto bg-purple-600 text-center text-white">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="w-3xl mx-auto">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
    
      {/* Tabs Section */}
      <div className="mx-auto flex justify-center -mt-16">
        <div role="tablist" className="tabs tabs-boxed flex gap-8">
          <label
            role="tab"
            className={`tab px-6 py-2 rounded-full ${
              activeTab === "cart" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("cart")}
          >
            Add to Cart
          </label>
          <label
            role="tab"
            className={`tab px-6 py-2 rounded-full ${
              activeTab === "wishList" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("wishList")}
          >
            Wish List
          </label>
        </div>
      </div>

      {/* Price Sorting and Total Price */}
      <div className="flex justify-between w-4xl mx-auto mt-16">
        <h1>Cars</h1>
        <h1>Total Price: ${totalPrice.toFixed(2)}</h1>
        <h1
          className="border-2 rounded-3xl border-blue-700 p-2 flex items-center text-purple-950 cursor-pointer"
          onClick={() => handleSort("price")}
        >
          Sort by Price
          <TbSortDescending2 />
        </h1>
        <h1
          className="cursor-pointer text-blue-600"
          onClick={handlePurchaseClick}
        >
          Purchase
        </h1>
      </div>

      {/* Display Data */}
      <div className="p-6">
        {filteredProduct.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredProduct.map((cart, idx) => (
              <AddToCart key={idx} cart={cart} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No items found in {activeTab}.
          </p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Purchase Summary</h2>
            <p className="mb-4">Total Price: ${totalPrice.toFixed(2)}</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
