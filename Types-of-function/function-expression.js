//*****Function Expression*****//

// 1. Function Expression Without Argument and Without Return Type.

var functionExpWor = function () {               //=> To store a function in an variable is a function expression.
    let name1="ram"
    let name2="sam"
    console.log(name1,"follow the words of"+name2)

}
functionExpWor();

// Function Expression With Argument and With Return Type.
let functionExpression = function (num1,num2) {
    return (num1*num2)+5;
}
console.log("ans:",functionExpression(5,5));
