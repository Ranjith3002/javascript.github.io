// control statements

// ==> IF 
 var age=19

 if (age>=18){
    console.log ("elligible for vote")
 }
 else{
    console.log("not elligible")
 }



 // ==>nested if
 var season="winter"

 if(season=="summer")
 {
     console.log("its too hot")
 }
 
 if(season=="winter")
 {
     console.log("bundle up and stay warm")
 }
 
 if(season=="spring")
 {
     console.log("enjoy the blooming flowers")
 }
 
 if(season=="autmn")
 {
     console.log("admire the colourful leaves")
 }
 

 //==> else if

 var mark=80;
 
 if(mark>=90){
    console.log("Excellent");
 }
 else if(mark>=80 ){
    console.log("Good keep it up");

 }
 else{
    console.log("Need to imprive your self");
 }

 // ==>> swith

 let dayOfWeek = "Wednesday";

 switch (dayOfWeek) {
     case "Monday":
     case "Tuesday":
     case "Wednesday":
     case "Thursday":
     case "Friday":
         console.log("It's a weekday.");
         break;
     case "Saturday":
     case "Sunday":
         console.log("It's a weekend.");
         break;
     default:
         console.log("Invalid day.");
 }

 //............ LOOP STATEMENTS...............//

 // ==> For 

for(i=1; i<=3; i=i+1)
{
   console.log("ranjith")
}


//TO print a numbers 1 to 10
for(i=1;i<=10;i=i+1)
   {
      console.log(i)
   }

   //to print a numbers 13579
   for(count=1;count<=10;count=count+2)
       {
          console.log(count) 
       }


//reversing a number by 10 to 1

for(count=10;count>=1;count=count-1)
   {
      console.log(count)
   }


// print only the even numbers from 1 to 10 

for(count=1;
count<=10;
count=count+1)
{
   if(count%2==0)
   {
       console.log(count)
   }
}
   

//print a 2 tables 
for(count=1;
   count<=10;
   count=count+1){
       console.log(count+"x2=",count*2)
   }




//==>  while

let count = 0;

while (count < 3) {
    console.log("Count: " + count);
    count++;
}

//==> do while
let num = 1;

do {
    console.log("Num: " + num);
    num++;
} while (num <= 5);

