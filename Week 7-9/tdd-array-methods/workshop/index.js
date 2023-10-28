function map(array, fn){
  const result = []
  for (let i = 0 ; i < array.length; i++){
    const afterfn = fn(array[i], i); 
    result.push(afterfn); 
  } 
  return result; 
} 
