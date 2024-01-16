const obj = {
    "Name": "Hassan",
    ID: 133,
    Cast: "Sheikh"
}


const obj2 = {
    Hassan: 45,
    Ayesha: 100,
    Maryam: 50,
    Ahmad: 100
}


console.log(obj);

console.log(obj['Name']);

obj['City'] = "Lahore"
obj.House = 45
obj.Name = 123

console.log(obj);

for (let a in obj2) {
    console.log("marks of " + a + " are " + obj2[a]);
}


let arr = ["Harry", 23, "House", "CEO"]

for (let b of arr) {
    console.log(b);
}


let a = prompt("Enter age : ")
a = Number.parseInt(a)
age = a
console.log(typeof age, age);

let i = 0
while (age < 150) {

    console.log(" While Action ")
    i++
    age += 10;
    console.log("Turn no: " + i + " Age= " + age);

}

age = a;
i = 0;
do {

    console.log(" Do While Action ");

    age += 10;

    ++i
    console.log("Turn no: " + i + " Age= " + age);

} while (age <= 150 || age == 150)