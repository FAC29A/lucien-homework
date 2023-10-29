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