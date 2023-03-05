// dot notation হলো dot দ্বারা কোনো object এর প্রপার্টি এর ভ্যালুকে এক্সেস করা। 
let person1 = {
    name: 'John',
    age: 30
};

console.log(person1.name);


// bracket notation হলো bracket দ্বারা কোনো object এর প্রপার্টি এর ভ্যালুকে এক্সেস করা। 
let person2 = {
    name: 'John',
    age: 30
};

console.log(person2['name']);


// bracket notation এর বেনিফিট হলো এটা দ্বারা variable declare করে কোনো প্রপার্টি এর ভ্যালুকে এক্সেস করা যায়। 
let person = {
    name: 'John',
    age: 30,
    designation: 'developer'
};

let propName = 'name'; // property এর নামকে variable এ বসানো হয়েছে। 
let prop2Name = 'age'; // property এর নামকে variable এ বসানো হয়েছে। 
let {designation} = person; // person object এর ভিতরের designation property টাকে declare করা হয়েছে। 
console.log(person[propName]);
console.log(person[propName], person[prop2Name]);
console.log(designation);
console.log({designation});