console.log("3 Types of identifiers : const,let,var");
var a = 5
let b = 6
const c = 7


{
    var a = 6
    console.log("var a in block:" + a);
}
console.log("var a outside block:" + a);

{
    let b = 7
    console.log("let b in block:" + b);

}
console.log("let b outside block:" + a);

{
    const c = 45;
    console.log("const c in block:" + c);
}
console.log("const c outside block:" + c);

b = 45;
console.log("Updated not not redeclare: " + b);

console.log("Tybe of b variable is: " + typeof b);


// c = 4;
// console.log(c);

const obj = {
    name: "Hassan",
    age: 10,
    pre: true
}

console.log(obj["name"])

let n = "hassan"
n = n + 2;
console.log(obj.age)

obj.class = 10;

console.log(obj["class"]);



const obj1 = {
    name: 1
}

obj1.name = 3
console.log(obj1.name);

obj.newkey = "newkey"

console.log(obj)

const dict = {
    a: "A",
    b: "B",
    c: "C",
    d: "D"
}
console.log(dict);

let num1 = 1007
let num2 = 50

console.log(!(num1 == num2 && num1 === 1007));
console.log(num1 == 2 || num1 === 1007 ? "Waooooo" : "OH SHIT");


alert
90