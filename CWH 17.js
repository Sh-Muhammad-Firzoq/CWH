//Arrays Methods


//1. Function .toString()
let arr = [1, 2, 3, null, 45]
console.log(arr);
let b = arr.toString();
console.log(b);
console.log(arr);


//2. Function .join()
let c = arr.join(" and ")
console.log(c, typeof c);



//3.  Function  .pop() Affects the Same Array, Removes the last element from array and return the removed element
let d = arr.pop()

console.log(d);
console.log(arr);
5



//Function  .push Modifies the Same Array, Add element to last of array and returned the length of array

let e = arr.push(3)
console.log("Length of new array is:", e, arr.push());
console.log(arr);



//Function  .shift() Removes the first element of array and return removed element,modifies same Array
let f = arr.shift()
console.log("Removed first element is:", f);
console.log(arr);



//Function .unshift() Adds First Element to array and returns new length of array,modifies same array
let g = arr.unshift(1)
console.log(arr);
console.log("Length of array is:", arr.unshift(), g);



//Property delete array[index] Delete the array element of given index and returns boolean,modifies the same array
let h = delete arr[2]
console.log(h, arr);


//Function .concat(arr2,arr3) returns ne array,doesnot modify original array   
let arr2 = [45, "a", true]
let arr3 = [true, "ca", 48]

let i = arr.concat(arr2, arr3)
console.log(i);
console.log(arr);