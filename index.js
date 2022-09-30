// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// function f(arr, n) {
//   let cnt = 0;
//   if (n === 1) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 1) {
//         cnt++;
//       }
//     }
//     return cnt;
//   }
//   if (n === 2) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         cnt++;
//       }
//     }
//     return cnt;
//   }
// }
// console.log(f(arr, 1));


//Presentation
//Js Array pop()
//The pop() method removes the last element from an array:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.pop();
// console.log(fruits);

//Js Array push()
// The push() method returns the new array length:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// console.log(fruits)

//Js Array shift()
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits)

//Js Array unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon");
// console.log(fruits)

//Js concat() Arrays
//The concat() method creates a new array by merging (concatenating) existing arrays:
// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];
// const myChildren = myGirls.concat(myBoys);
// console.log(myChildren);

//Js Array splice()
//The splice() method can be used to add new items to an array:
// The first parameter (2) defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.
// The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits)

//Js Array slice()
//The slice() method slices out a piece of an array into a new array.
//Has start and end
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// console.log(fruits)

//Js Array indexOf()
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log (fruits.indexOf('Banana'));

//Js Array sort()
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.sort();
// console.log(fruits)

//Js Array reverse()
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.reverse();
// console.log(fruits)