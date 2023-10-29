function map(array, fn){
  const result = []
  for (let i = 0 ; i < array.length; i++){
    const afterfn = fn(array[i], i); 
    result.push(afterfn); 
  } 
  return result; 
} 


function filter(array, fn) {
  const result = []; 

  for (let element of array){
  if (fn(element)) {
    result.push(element)
  }
  }
  return JSON.stringify(result); 
}


function every(array, fn){
  let result = true; 
  for (let element of array){

 
    result = fn(element); 
    if (!result) break; 
  }

   return result; 
}


function some(array, fn) {
  let result = true; 
  
  for (let element of array) {
    if (fn(element)){
      result = fn(element); 
      break
    }
    if (!fn(element)){
      result = fn(element); 
    }
  }
  return result; 
}


function find(arr, fn){
  let result = 0
  for(let i = 0;  i < arr.length;  i++) {
    let element = arr[i];   
    result = element
    if(fn(element)) break; 
    if (!fn(element)){
    result =  undefined
    }
  }
    return result; 
}