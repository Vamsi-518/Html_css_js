
// let myArray = [10,3.55, true, "hello", 3]

// myArray[1] = "for"

// for (let index = 0; index < myArray.length; index++ ) {
//     console.log(myArray[index])
// }



// let myObj = {
//     id: 99,
//     name: "naga",
//     age: 32,
//     data: []    

// }
// console.log(myObj.age)


// let userdata =[
//     {
//         id: 99,
//         name:"user1"
//     },
//     {
//         id: 100,
//         name: "user2"
//     }
// ]


// const myArray =["Welcome", 2312 ,34.543 , true , "hello", "bye"]

// console.log(myArray);

// myArray.unshift()
// //push
// //pop
// //shift
// //unshift

// console.log(myArray);

// myArray.unshift("vamsi")

// console.log(myArray);


//Task 2:

// sort the array [4, -5, 242, 353, -2353, 0]
let arr = [4, -5, 242, 353, -2353, 0];
arr.sort(function(a, b) {
    return a - b;
});
console.log(arr);
 


//length of array
// console.log("Length of array:", arr.length);
// console.log(arr.length)


//index  user-input 
// const myArray=['vamsi','welcome',3,5,7,9,true]
// var a=prompt()
// for (let i=0;i<myArray.length;i++) {
//     if (myArray[i]==a) {
//         console.log(i)
//         break
//     }
// }

//if an user-input in th array
// const myArray=['Hello',21,33.33,true,'welcome','bye']
// var a=prompt()
// for (i in myArray) {
//     if (myArray[i]==a) {
//         console.log('found')
//     }
// }

// // Find the sum of all numbers in the array

// let arr = [4, -5,242, 353, -2353, 0];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
// }

// console.log("Sum of array:", sum);