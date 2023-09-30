const toUpperCaseFirst = (str) => {
  
  const arr = str.trim().split(" ");
  
  arr.map((item)=>{ 
    return item.charAt(0).toUpperCase() + item.slice(1);
  });
  console.log("arr =",arr);
  
  result = arr.join(" ");
  
  return result;
  

  }

export default toUpperCaseFirst;