// const getStoredData=()=>{
//     const getDataFLS=localStorage.getItem("product")
//     if(getDataFLS){
//         return JSON.parse(getDataFLS)
//     }else{
//         return []
//     }
// }
// const addToLs=(id)=>{
// const callGetStoredDate=getStoredData();
// if(callGetStoredDate.includes(id)){
//     alert("data is already added to cart")
// }else{
// callGetStoredDate.push(id)
// alert("Thanks a lot to added to cart")
// }
// saveToLoSto(callGetStoredDate)
// }
// const saveToLoSto=(product)=>{
//     const stringifiData=JSON.stringify(product)
//     localStorage.setItem("product",stringifiData)
// }
// export {addToLs , getStoredData}

export const getStoredData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

export const addToLocalStorage = (key, id) => {
  const storedData = getStoredData(key);
  if (!storedData.includes(id)) {
    storedData.push(id);
    localStorage.setItem(key, JSON.stringify(storedData));
    alert(`Item added to ${key === "cart" ? "Cart" : "Wish List"}`);
  } else {
    alert(`Item is already in the ${key === "cart" ? "Cart" : "Wish List"}`);
  }
};



