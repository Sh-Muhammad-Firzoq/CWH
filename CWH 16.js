//Arrays

const arr = [1, null, true, "Hassan", 45.58]
let obj = {
    key1: "A",
    key2: "S"
}

console.log(arr);

console.log("Length of Array is", arr.length);

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

for (const index of arr) {
    console.log(index);
}



for (let key = 0; key < Object.keys(obj).length; key++) {
    console.log(obj[Object.keys(obj)[key]]);
}



arr[2] = "dhakj"

console.log(arr);