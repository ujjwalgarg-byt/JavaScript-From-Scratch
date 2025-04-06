// switch case statement
// syntax
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// example
const week = 3;
switch (week) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thrusday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;

    default:
        console.log("default case");
        
        break;
}
// note:- agar hum break nahi lageynge to jab hamara case match ho jata tab ye uske bad ka sara code execute krega except default