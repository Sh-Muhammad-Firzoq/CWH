let a = prompt("Enter a number: ")
a = Number.parseInt(a)
let b = prompt("Enter b number: ")
b = Number.parseInt(b)
    // let c = prompt("Enter c number: ")
    // c = Number.parseInt(c)
let c = prompt("Press (1) for Addition , Press (2) for Subtraction");
c = Number.parseInt(c)
    // console.log(hello())

const sum = (a, b) => {
    console.log(hello())
    console.log("Sum of", a, "and", b, "is", (a + b) / 2);
    return (a + b) / 2
}

const sub = (a, b) => {
    console.log("Sum of ", a, "And ", b, "is :", (a - b));
    return a - b;
}


const hello = () => {
    console.log("hello how are you");
    return 123455
}


switch (c) {
    case 1:

        console.log("sum of a and b is :", sum(a, b))
        break;
    case 2:

        console.log("sum of a and b is :", sub(a, b))
        break;

    default:
        break;
}





// console.log("sum of b and c is :", sum(b, c))
// console.log("sum of c and a is :", sum(c, a))