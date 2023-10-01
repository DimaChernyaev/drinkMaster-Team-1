const toUpperCaseFirst = (str) => {
  
    const arr1 = str.split(" ");
  
    const arr2 = arr1.map((item)=>item[0].toUpperCase() + item.slice(1));
    
    const result = arr2.join(" ");
    
    return result;
  }

export default toUpperCaseFirst;