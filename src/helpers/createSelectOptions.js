//функція для перетворення масиву значень в масив об'єктів для React Select

const createSelectOptions = (array=[]) => {
    //console.log("сreateSelectOptions отримує array = ", array);
     if (array.length === 0) { return {} } 
 
     const resultObject = array.map(item => {
            return { "value" : item, "label" : item.toUpperCase() };
         }
     );
    // console.log("сreateSelectOptions повертає resultObject = ", resultObject);
     return resultObject;
 
 }
 
 export default createSelectOptions;