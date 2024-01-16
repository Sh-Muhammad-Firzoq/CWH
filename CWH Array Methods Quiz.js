let arr = [1, "Hassan", null]

// Array Methods
// 1..toString() new array
// 2..toJoin() new array
// 3..push() same array
// 4..pop() same array
// 5..shift() same array
// 6..unshift() same array
// 7..delete[] same array
// 8..concat() new array


//1. .toString()

let a = arr.toString()
console.log("New Array is ", a);
console.log("Original array is:", arr);

//2 .Join()

let b = arr.join("*")
console.log("New Array is ", b);
console.log("Original array is:", arr);

//3. .push()

let c = arr.push("New String")
console.log("Return the length:", c);
console.log("Modifies the original array:", arr);

//4. .pop()

let d = arr.pop()
console.log("Return the Pop element in variable:", d);
console.log("Modifies the original array:", arr);

//5. .shift()

let e = arr.shift()
console.log("Removed First ekement in Array is:", e);
console.log("Modifies the original array is:", arr);

//6. .unshift()

let f = arr.unshift(1)
console.log("Returns the Length of Array is:", f);
console.log();

//7. .del[]

let g = delete arr[0]
console.log(`Returns the boolean:`, g);
console.log("Modifies the original array:", arr);

//8. concat()

let arr2 = [5, 4, 5, 78]
let arr3 = ["asdsdas", "asdasd"]
let arr4

arr4 = arr.concat(arr2, arr3)
console.log("Returned the new array:", arr4);
console.log("Original Array is", arr);