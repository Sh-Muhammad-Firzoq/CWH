//Problem 2

const obj = {
    Hn: 100,
    Ali: 60,
    Harrys: 90,
    Hussain: 800,
    Amir: 70
}

for (let a in obj) {
    console.log("Marks of", a, "is", obj[a])
}


//Problem 1

console.log("************************************");
console.log("************************************");
for (let a = 0; a < Object.values(obj).length; a++) {
    console.log("Marks of", Object.keys(obj)[a], "is", Object.values(obj)[a], obj[Object.keys(obj)[a]]);
}


//Problem 3

console.log("************************************");
console.log("************************************");

// let a = prompt("Enter the number:")
// a = Number.parseInt(a)

// while (a <= 50) {
//     console.log("Try Again")
//     a = prompt("Enter the number:")
//     a = Number.parseInt(a)
// }


let boy1 = "Has\nsan"
let girl2 = "Aye\;sha"

console.log(`${boy1} is fathef\n of ${girl2}`);
console.log(boy1.length);
console.log(boy1[2])
console.log(`hfdsj"fk"`);