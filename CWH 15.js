//Question 1
let v = "Harjfbvkjfsr\'"
console.log(v.length);

//Question2
let sentence = "the fox jumps over the roof"
let word1 = "fox"
let word2 = "ji"
console.log(`The ${word1} ${word2} Sentence ${sentence.includes(word1) && sentence.includes(word2) ? "Contains" : "Not Contains"}`)

//Question3
console.log(v.toUpperCase());


//Question4
let str = "give me rupess 1000"
console.log(str.slice("give me rupees ".length));
console.log(typeof Number.parseInt(str.slice("give me rupees ".length)));


//Question5
v[2] = "5"
console.log(v);