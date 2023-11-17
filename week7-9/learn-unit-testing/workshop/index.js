// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

function searchParamsToObject(string){
const params = new URLSearchParams(string); 
return Object.fromEntries(params); 
}


function isLeapYear(year) {
    //  if not number or smaller than zero 
  if ( typeof year !== "number"){
    return "please enter number"
  }else if (year < 0 ){
    return "please enter positive number"
     // leap year case 
  } else { return year % 400 === 0? true: year % 100 === 0? false: year % 4 === 0? true: false }
}

console.log(isLeapYear(-4200)); 