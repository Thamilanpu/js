//q1
// let months = prompt("Enter a month:");
// switch (months) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log(" the number of days in a month is 31.")
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log(" the number of days in that month is 30.")
//         break;
        
//             case 2:

// console.log(" the year is not the leap year")
// break;

//     default:
// console.log("invalid month. ")
// break;
//}


//q2
// let num1 = 10; // First static value
// let num2 = 5;  // Second static value
// let operation = '+'; // You can change this to '-', '*', '/', or '%'

// let result;

// switch (operation) {
//   case '+':
//     result = num1 + num2;
//     break;
//   case '-':
//     result = num1 - num2;
//     break;
//   case '*':
//     result = num1 * num2;
//     break;
//   case '/':
//     result = num1 / num2;
//     break;
//   case '%':
//     result = num1 % num2;
//     break;
//   default:
//     console.log("Invalid operation");
// }

// console.log(`Result of ${num1} ${operation} ${num2} is: ${result}`);



//q3
let end= prompt("Enter :"); 
switch (end) {
    case 'HTML':
    case 'CSS':
    case 'JAVASCRIPT':
      console.log("Frontend")  
      break
      case 'NODEJS':
    case 'EXPRESSJS':
      console.log("Backend")  
      break;
      default:
        console.log("Not in list") 
        break ;
}

