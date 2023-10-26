//q1
const userAge = prompt("Enter your age:");

if (userAge === null || userAge === "") {
  console.log("You didn't enter your age.");
} else {
  userAge = parseInt(userAge); // Parse the input as an integer

  if (userAge >= 18) {
    console.log("You are old enough to drive.");
  } else {
    const yearsLeft = 18 - userAge;
    console.log(`You are left with ${yearsLeft} years to drive.`);
  }
}

// q2
const myAge = 25; // Your age, you can set your actual age here

const yourAge = prompt("Enter your age:");

if (yourAge === null || yourAge === "") {
  console.log("You didn't enter your age.");
} else {
  yourAge = parseInt(yourAge); // Parse the input as an integer

  if (yourAge > myAge) {
    const ageDifference = yourAge - myAge;
    console.log(`You are ${ageDifference} years older than me.`);
  } else if (yourAge < myAge) {
    const ageDifference = myAge - yourAge;
    console.log(`I am ${ageDifference} years older than you.`);
  } else {
    console.log("We are the same age.");
  }
}





// q3
let a = 4
let b = 3
if (a > b) {
    console.log("a is greater than b")
}
else {
    console.log(a + "is less than " + b)
}





// q4
//  let c= prompt("Enter a number:"); 
let c = 56
if (c >= 80) {
    console.log("A")
}
else if (c >= 70) {
    console.log("B")
}
else if (c >= 60) {
    console.log("C")
}
else if (c >= 50) {
    console.log("D")
}
else {
    console.log("F")
}
// q5
 let months= prompt("Enter a month:"); 
switch (months) {
    case 'September':
    case 'October':
    case 'November':
      console.log("Autumn")  
      break
      case 'December':
    case 'January':
    case ' February':
      console.log("Winter")  
      break
      case 'March':
    case 'April':
    case 'May':
      console.log(" Spring")  
      break
      case 'June':
    case 'July':
    case 'August':
      console.log(" Summer")  
      break
      default:
        console.log("Not month ") 
        break 

   

}




