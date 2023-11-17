
test( "check if site is correct", ()=> {
 const actual = makeUrl("pikachu"); 
 const expected = "https://pokeapi.co/api/v2/pikachu"
 equal(actual, expected); 
 equal(makeUrl("bulbasaur"),"https://pokeapi.co/api/v2/bulbasaur")
}); 


test("object deep equality test", ()=> {
const actual = searchParamsToObject("name=oliver&email=hello@oliverjam.es"); 
const expected = { name: "oliver", email: "hello@oliverjam.es" }
equal (actual.name, expected.name); 
equal (actual.email, expected.email)

}

)

test("isLeapYear handle invalid format", () =>{
equal (isLeapYear("200"), "please enter number", "input must be a number" ); 
equal (isLeapYear(-4200), "please enter positive number", "input must be a positive number")
})


test ("isLeapYear handle mutiples of 4", () =>{
equal (isLeapYear(4), true, "year 4 is a leap year")
equal (isLeapYear(2004), true, "year 2004 is a leap year")
})


test ("isLeapYear handle mutiples of 100", () =>{
    equal (isLeapYear(1900), false, "year 1900 is not a leap year")
    equal (isLeapYear(200), false, "year 200 is not a leap year")
    })


test ("isLeapYear handle mutiples of 400", () =>{
        equal (isLeapYear(2000), true, "year 2000 is a leap year")
        equal (isLeapYear(1600), true, "year 1600 is a leap year")
        })


