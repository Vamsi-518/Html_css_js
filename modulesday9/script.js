import add from "./mod1.js";
import sub from "./mod2.js";


console.log(add(2, 3));

console.log(sub(10, 20));



// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//      .then(res => res.json())
//      .then(data => console.log(data.name))  //.id,.name
//      .catch(err => console.log)


// async function myFun() {
//     try{
//         let API = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//         let res = await API.json()
//         console.log(res);
//     } catch(err){
//         console.log(err);
//     }
// }
// myFun()