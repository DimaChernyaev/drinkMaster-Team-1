import toUpperCaseFirst from './toUpperCaseFirst';

//функція для перетворення масиву значень в масив об'єктів для React Select

const createOption = (label="") => ({ "label": toUpperCaseFirst(label),  "value": label });


const createSelectOptions = (array=[]) => {
    
    if (array.length === 0) { return [] } 
    
    const resultObject = array.map(item => createOption(item))   //return { "value" : item , "label":  toUpperCaseFirst(item)};
    
    return resultObject;
 }
 
 export default createSelectOptions;