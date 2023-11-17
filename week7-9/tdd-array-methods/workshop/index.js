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
  return result; 
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



// set initial as 3rd paremeter
function reduce(arr, fn, initial){
  
  let acc = initial; 
  let i = 0 

  if (initial == undefined ){
    i = 1
    acc = arr[0]; 
    }
    // in the for loop, you don't need to add + acc because you should let function calculate itself, perhaps it could be multiply or other stuff 
    for (; i < arr.length;  i++){
      acc = fn(acc, arr[i]) 
  }
  return acc; 
}

// depth = 1 is default setting if depth parameter is not entered
function flat(array, depth=1) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && depth > 0) {
      result.push(...flat(array[i], depth - 1));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

