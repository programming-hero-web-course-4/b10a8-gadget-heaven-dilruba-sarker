const getStoredData=()=>{
    const getDataFLS=localStorage.getItem("product")
    if(getDataFLS){
        return JSON.parse(getDataFLS)
    }else{
        return []
    }
}
const addToLs=(id)=>{
const callGetStoredDate=getStoredData();
if(callGetStoredDate.includes(id)){
    alert("data is already added to cart")
}else{
callGetStoredDate.push(id)
alert("Thanks a lot to added to cart")
}
saveToLoSto(callGetStoredDate)
}
const saveToLoSto=(product)=>{
    const stringifiData=JSON.stringify(product)
    localStorage.setItem("product",stringifiData)
}
export {addToLs}