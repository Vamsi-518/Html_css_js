//function in javascript

// function myfun(num1 ,num2) {
//     return num1 - num2
// }

// console.log(myfun(3, 5))

// function myfun(num1 ,num2) {
//     return num1 - num2
// }



// // function myfun(num1 ,num2) {
// //     return num1 - num2
// // }

// // const afun = function myFun(num1, num2) {
// //     return num1 - num2
// // // }

// const afun = function(num1, num2) {
//     return num1 - num2
// }

// const aun = (num1, num2) =>{
//     return num1 + num2
// }
// const aFun = (num1, num2) => num1 + num2


function calculator(num1, num2, operator) {

    let result;

    if (operator === "+") {
        result = num1 + num2;
    }
    else if (operator === "-") {
        result = num1 - num2;
    }
    else if (operator === "*") {
        result = num1 * num2;
    }
    else if (operator === "/") {
        result = num1 / num2;
    }
    else {
        console.log("Invalid Operator");
        return;
    }

    console.log("First Number:", num1);
    console.log("Second Number:", num2);
    console.log("Operator:", operator);
    console.log("Result:", result);
}

calculator(10, 5, "+");
calculator(10, 5, "-");
calculator(10, 5, "*");
calculator(10, 5, "/");