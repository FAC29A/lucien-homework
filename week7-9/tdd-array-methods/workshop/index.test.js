// testing map()

test("map() should return an array with the same number of elements", () => {
  const result = map([1], () => {});
  equal(result.length, 1);
});

// function map(array, fn){
//     const result = map(array, fn)
//     result.length = array.length;   
//   }
  
  
test("map() should transform each element of the array using the fn argument", () => {
  const result = map([1], (x) => x + 1);
  equal(result[0], 2);
});

// function map(array, fn){
//   const result = []
//   const arrayItem =  array[0]; 
//   const afterfn = fn(arrayItem);  
//   result.push(afterfn); 
//   return result; 
// } 

test ("map() should transform an array of two element using the fn argument", () => {
  const result = map([1, 2], (x) => x + 1);
  equal(result[0], 2);
  equal(result[1], 3);

})


test ("map() should pass index into fn argument ", () => {
  const result = map(['hello', 'world'], (word, index) => `${word}${index}`); 
  equal(result[0], 'hello0'); 
  equal(result[1], 'world1'); 
})


// ----Testing filter fucntion 


test ("filter() should return nothing if it doesn't match condition ", () => {
  const actual = filter([1], (x) => x > 3); 
  console.log(actual); 
  equal(actual,[]); 
})


// function filter(array, fn) {
//   const result = []; 
//   const element = array[0]
//   if (!fn(element)) {
//     return JSON.stringify(result); 
//   }
// }


test ("filter() should return the same element if it match condition", () => {
  const actual = filter([4], (x) => x > 3)
  equal(actual, JSON.stringify([4]))
})


// function filter(array, fn) {
//   const result = []; 
//   const element = array[0]
//   if (!fn(element)) {
//     return JSON.stringify(result); 
//   }
//   if (fn(element)) {
//     result.push(element)
//     return JSON.stringify(result); 
//   }
// }

test("filter() can handle an array of mulptilpe elements", ()=>{
 const actual = filter([1,2,3,4,5], (x)=> x > 3 )
  equal(actual, JSON.stringify([4, 5]))
})

// function filter(array, fn) {
//   const result = []; 

//   for (let element of array){
//   if (fn(element)) {
//     result.push(element)
//   }
//   }
//   return JSON.stringify(result); 
// }

// ---- Testing Every


test ("every() should return true if all the element pass the condition ", ( )=>
{  const actual = every([2, 3], (x) => x > 1);

  equal(actual, true)
})

// function every(array, fn){

//   let result = true; 
//   for (let element of array){
//    if (fn(element)){
//     result =  fn(element); 
//   }
//   return result; 
// }
// }

test ("every() should break the loop if any of element doesn't pass the loop", () =>
{ const actual = every([1, 2, 3, 4, 5], (x)=> x > 4)
  equal(actual, false)
}
)


// function every(array, fn){
//   let result = true; 
//   for (let element of array){

 
//     result = fn(element); 
//     if (!result) break; 
//   }

//    return result; 
// }



// ----- Some fucntion 

test ("some() should loop through all element and break when any element meet condition", () => {
  const actual = some([10, 20], (x) => x > 15)
  equal (actual, true)
})

// function some(array, fn) {
//   let result = true; 
  
//   for (let element of array) {
//     if (fn(element)){
//       result = fn(element); 
//       break
//     }

//   }
//   return result; 
// }

test ("some() in the situation when nothing meet the condition should return false", () => {
  const actual = some([10, 20], (x) => x > 30)
  equal (actual, false)
  equal (some([30, 60, 90], (x) => x > 30), true)
})


// ------find() test

test("find() find the first element meet the condition and return the first element that passed and break ", () =>{
  const actual = find([10, 20, 30], (x) => x > 15)
  equal (actual, 20); 
  equal (find(['a','b','c','b'], (x) => x == 'b'), 'b')
})

// function find(arr, fn){

//   let result = 0
//   for(let i = 0;  i < arr.length;  i++) {
//     let element = arr[i]; 
//     result = element
//     if(fn(element)) break; 
//   }
//     return result; 
// }

test("find() to return undefined if no element match the condition", () =>{
  const actual = find([10, 20, 30], (x) => x > 40)
  equal (actual, undefined)
})

// function find(arr, fn){
//   let result = 0
//   for(let i = 0;  i < arr.length;  i++) {
//     let element = arr[i]; 

  
//     result = element
//     if(fn(element)) break; 

//     if (!fn(element)){
//     result =  undefined
//     }
//   }
//     return result; 
// }


// ----reduce()testing 

test("reduce() that handle total in one iteration", ()=>{
 const actual = reduce([1], (acc, x) => acc + x, 0 )
 equal (actual, 1)
  
})

// function reduce(arr, fn){
//   let acc = 0; 
//   acc = arr[0] + 0; 
//   return acc; 
// }

test("reduce() loop ofer each element and change accumulator", ()=>{
  const actual = reduce([2, 3, 4], (acc, x) => acc + x, 1 )
  equal(actual, 10)
  equal(reduce([2,3], (acc, x)=> acc * x, 1), 6)
})



// --------------test flat()
test ("flat() handle for two dimension layer ", ()=>{
  const actual = flat([1, [2, 3], 4])
  equal(actual[2], 3)
})

// function flat(array) {

//   let result = []; 
//  for (let i = 0; i < array.length; i ++ ){
//   if (Array.isArray(array[i])){
//     result = result.concat(array[i])
//   } else {
//     result.push(array[i])
//   }
//  }
//  return JSON.stringify(result); 

// }

test ("flat() handle for more than two dimension layer ", ()=>{
  const actual = flat([1, [2,[3]], 4], 2)
  equal(actual[1], 2)
  equal(actual[2], 3)
})

// depth = 1 is default setting if depth parameter is not entered
// function flat(array, depth=1) {
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i]) && depth > 0) {
//       result.push(...flat(array[i], depth - 1));
//     } else {
//       result.push(array[i]);
//     }
//   }
//   return result;






