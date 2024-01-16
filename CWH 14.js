//Length Property .length()

let Property1 = "Length"
let num = 123456
let user = "Hassan"
console.log(Property1.length);

//Function .toUpperCase()
console.log("aadlknhflkan", `${Property1}`.toUpperCase(), "aadlknhflkan");

//Function .toLowerCase()
console.log("In Lower Case:", Property1.toLowerCase() + " hshgfjlkgs");

//Function .slice()
console.log(`${Property1}`.slice(0));
console.log(`${Property1}`.slice(0, 5));

//Function .replace() 
Property1.replace("L", "R")
console.log(Property1.replace("L", "R"));
console.log(`${num}`.replace(1, 2));
console.log(Property1, num);

//Function .concat("")
console.log(user.concat(" is dealing in ", Property1, " and have id: ", num));
let v = `${user}`.concat(" is dealing in ", `${Property1}`, " and his id: ", num)
console.log("Let v Case:", v);

//Function .trim()
v = `     ${user}    ${user}         ${user}      `
console.log(v.length);
console.log(v.trim().length);
console.log(v.trim());
console.log(v.indexOf("a"));

//Quick Quick

let user2 = "dbkdbckaj"

// for (let i = 0; i < user2.length; i++) {
//     console.log(user2[i]);
// }

for (const i of user2) {

    console.log(i);

}