    //*****Arrow Functions *******/

// Arrow Function Without Argument
let noArgument=()=> console.log('contains no argument');  //With no Argument
noArgument();
// with one arguement
const singleStatement = single=> 'with a Single Statement';  //contain single argument .
let resProgaram=singleStatement();
console.log(resProgaram);

// Arrow Function With Multi Statement (Argument).
const welcome =(name1,name2)=>{                               //Contain Multiple Argument Argument With Another One Statement
    let welcome=`WELCOME TO MY PAGE MR.${name1} AND MR. ${name2}`;
    return welcome;
}
let finResult= welcome('Ranjith kumar','AJITH');
console.log(finResult);

// Arrow Function With A Callback.
// A function that accepts a callback
const processNumbers = (num1, num2, callback) => {
  // Call the callback with the sum of num1 and num2
  return callback(num1 + num2);
};

// Callback function (arrow function)
const displayResult = result => {
  console.log("The result is:", result);
};

// Calling processNumbers and passing displayResult as the callback
processNumbers(5, 10, displayResult);


  //Arrow Function Returning an Object
  const user = () => ({    // returning an object like json structure.
firstname:'ranjith',
lastname:'kumar',
roll:5054,
ph_no:950080989
});
let detail=user();
console.log(detail);


// Arrow Function with IIFE .
((yournmae)=>{ // arrow function is a shorthand syntax for writing functions.
  var getname=yournmae;
  console.log("Your name:",getname);
  })('Venkat');