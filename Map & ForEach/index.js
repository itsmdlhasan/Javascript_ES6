// while loop for multiply each array element by 2
const number1 = [1, 2, 3, 4, 5];
let i = 0;
while (i < number1.length) {
    number1[i] = number1[i] * 2;
    i++;
}
console.log(number1);


// for loop for multiply each array element by 2
const number2 = [1, 2, 3, 4, 5];
for (let i = 0; i < number2.length; i++) {
    number2[i] = number2[i] * 2;
}
console.log(number2);


// for of loop for multiply each array element by 2
const number3 = [1, 2, 3, 4, 5];
let number3NewArray = [];
for (const number of number3) {
    const multiply = number * 2;
    number3NewArray.push(multiply); // for of লুপে যেহেতু const দ্বারা সব variable আলাদা হয়ে যায় তাই এটা কে পৃথক একটা variable এ পাঠিয়ে দিতে হবে একলাইনে array output দেখার জন্য। 
}
console.log(number3NewArray);


// map loop for multiply each array element by 2
const number4 = [1, 2, 3, 4, 5];
const number4MultiplyBy2 = number4.map (number => number * 2); // map এর ক্ষেত্রে callback function থাকতে হবে। 
console.log(number4MultiplyBy2);


// for each loop for multiply each array element by 2
const number5 = [1, 2, 3, 4, 5];
let number5NewArray = []; 
number5.forEach (number => {
    const multiply = number * 2;
    number5NewArray.push(multiply); // আলাদা array তৈরি করার কারন for each loop দ্বারাও for of এর মত সব আলাদা variable হয়ে যায়। তাই একলাইনে দেখতে চাইলে এটাকে আলাদা array তে নিতে হবে। 
});
console.log(number5NewArray); 


// convert array of objects in single object using map or foreach
// উদ্দেশ্য হচ্ছে ID01 দিয়ে কল করলে যেন নাম চলে আসে। 
const persons = [
    { id: 'ID01', firstName: 'Abul', age: 56 },
    { id: 'ID02', firstName: 'Kabul', age: 44 },
    { id: 'ID03', firstName: 'Chunnu', age: 32 },
    { id: 'ID04', firstName: 'Komol', age: 78 }
];

// with map
// const info = {};
// persons.map (p => {
//     const id = p.id;
//     const value = p.firstName;
//     info[id] = value;
// })
// with forEach
const info = {};
persons.forEach (p => {
    const id = p.id;
    const value = p.firstName;
    info[id] = value;
})
console.log(info);
console.log(info.ID03); // অর্থাৎ persons array তে থাকা id সমূহের ভ্যালুকে প্রোপার্টি হিসেবে কনভার্ট করে সেটাকে আবার info object এ সেট করে ফাকা জায়গা পূরন করা হলো। 