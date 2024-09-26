console.log("//variables....")
//==>var

var a= 10;
console.log(a);
//------------------------------//
var a= 20;
var a= 30;
console.log(a);
a=40;
console.log(a);
//-------------------------------//
//==>let
function let(){
    let a=50;
    console.log(a);
    a=60
    console.log(a);
}
let();

//----------------------//
//==>const

const d=90;
console.log(d);
//---------------------------------//

console.log("//----DATA TYPES.........")
function dtypes(){
    let a=10;
    console.log(typeof(a));

    //--------------------//
    let b="ram";
    console.log(typeof(b));
    //--------------------//
    let c= true;
    console.log(typeof(c));
    //--------------------//
    let i= null;
    console.log(i);
    
//--------------------//
let e;
console.log(typeof(e));

}

dtypes();

//--------------------------------------------------------------------------------------//
console.log("------- synchronous & asynchronous ------------------")
console.log("------- synchronous------------------")
function synchronous(){
    console.log("ram")
    console.log("sam")
    console.log("ravi")
    console.log("krish")
    console.log("ajith")
    console.log("venki")
    console.log("karthi")
    console.log("gokull")
}
synchronous();
 

 
console.log("------- Asynchronous ------------------")
function asyn(){
function Asynchronous(){
    console.log("ram")
    console.log("sam")
    console.log("ravi")
    function greet() {
        console.log("Hello, World!");
      }
      
      setTimeout(greet, 2000);

    console.log("krish")
    console.log("ajith")
    console.log("venki")
    console.log("karthi")
    console.log("gokull")
}
  Asynchronous();
}
asyn()

console.log(vr);
  

