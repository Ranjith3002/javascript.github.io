//******Named Function or Function Declareation  *******/

//Named function without argument.


function namedfnWO() {                                //=>Declare a name for the function
    console.log('Named function without argument');

}
namedfnWO()

//2. Named Function with Arguments and without Return Type.

function addSum(a, b) {   //=>names a function with arguement
    console.log(a + b);
}

addSum(5, 3);

//3.Named Function without Arguments and a Return Type.

function funRt() {
    return 'Named Function without Arguments and a Return Type';  //=>Having return type inside the function

}
let returnValue = funRt();
console.log(returnValue);

//4.Named Function with Arguments and  Return Type.

function withArgument(x, y) {    //=> It contains both arguments and return type .
    let mul = x * y;
    return mul;
}
let mulValue = withArgument(8, 9);
console.log("RESULT:", mulValue);
