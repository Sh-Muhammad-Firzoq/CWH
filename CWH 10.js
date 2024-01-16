// let age = prompt("enter the age : ")

// alert("Before Parse: " + typeof age)

// age = Number.parseInt(age)

// alert("After Parse int : " + typeof age)


// age >= 10 && age <= 20 ? alert("SH: You Are Eligible for driving :" + age) :
//     age < 10 ? alert("SH: U are under age") :
//     (alert(" SH: You are senior citizen"))



// alert("Before Switch Age, " + age + typeof age);


// // //problem 2
// switch (age) {
//     case (age > 10 || age === 10):
//         alert("Case: you are elligable" + age)
//         console.log(age >= 10);
//         break;

//     case (age >= 20):
//         alert("Case :You are Kid" + age)
//         break;

//     default:
//         alert("Default");

// }

// // //problem3 

// // // let a = console.log("please enter ")












let age = prompt("enter the age : ");

alert("Before Parse: " + typeof age)

age = Number.parseInt(age)

alert("After Parse int : " + typeof age)


// age >= 10 && age <= 20 ? alert("SH: You Are Eligible for driving :" + age) :
//     age < 10 ? alert("SH: U are under age") :
//     (alert(" SH: You are senior citizen"))



// alert("Before Switch Age, " + age + typeof age);


// //problem 2
switch (true) {
    case (age <= 10 && age >= 5):
        alert("And Case: Between 5 and 10 : " + age)
        break;

    case (age >= 20 && age <= 30):
        alert("Case : between 20 and 30 : " + age)
        break;


    default:
        alert("Default");

}


alert("If else statemnets  Now ")

if (age <= 10 && age >= 5) {
    alert("And Case: Between 5 and 10 : " + age)
} else if (age >= 20 && age <= 30) {
    alert("Case : between 20 and 30 : " + age)
}


alert("Modulus Problem")

switch (true) {

    default: alert("Not Valid")
    break;

    case (age % 2 == 0 && age % 3 == 0):
            alert("Modulus/Remainder is Zero")
        break;


}

// //problem3 

// // let a = console.log("please enter ")