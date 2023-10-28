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





