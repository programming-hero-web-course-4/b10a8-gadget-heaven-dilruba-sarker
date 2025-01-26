import Swal from "sweetalert2";


export const getStoredData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const addToLocalStorage = (key, id) => {
  const storedData = getStoredData(key);
  if (!storedData.includes(id)) {
    storedData.push(id);
    localStorage.setItem(key, JSON.stringify(storedData));
    Swal.fire(`Item added to ${key === "cart" ? "Cart" : "Wish List"}`);


    
  } else {
    Swal.fire(`Item is already in the ${key === "cart" ? "Cart" : "Wish List"}`);
  }
};



