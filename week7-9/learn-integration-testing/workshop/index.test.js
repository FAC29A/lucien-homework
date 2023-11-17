test ("addition handling ", () => {
 equal (calculate(2, "+",  2), 4 )
 equal (calculate(33,  "+",  2.2),35.2)
})

test ("substraction handling ", () => {
    equal (calculate(2, "-",  2), 0 )
    equal (calculate(33,  "-",  10.2), 22.8)
   })

   test ("multiply handling ", () => {
    equal (calculate(2, "*",  2.2), 4.4 )
    equal (calculate(33,  "*",  3), 99)
   })

   test ("division handling ", () => {
    equal (calculate(24, "/",  10), 2.4 )
    equal (calculate(33,  "/",  3), 11)
   })

   test ("string handling ", () => {
    equal (calculate("24", "/",  "3"), 8 )
    equal (calculate("33",  "/",  3), 11)
   })

   test ("error for invalid sign ", () => {
    equal (calculate("24", "^",  "3"), "Please enter a valid sign (+, -, *, /)" )
    equal (calculate("33",  "^",  3), "Please enter a valid sign (+, -, *, /)")
   })


test('calculate the input and update the page',  ()=> {

const aInput = document.querySelector("#a"); 
aInput.value = 3; 
const signInput = document.querySelector("option"); 
signInput.value = "+"; 
const bInput = document.querySelector("#b"); 
bInput.value = 4; 
const submitButton = document.querySelector("button[type='submit']")
submitButton.click(); 
const result = document.querySelector("#result")

// textContent always return a string, not a number
equal(result.textContent, "7"); 
result.textContent = ""; 
}
)