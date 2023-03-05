// Object এ প্রোপার্টি এবং মেথড এই দুইটা জিনিস থাকে key হিসেবে থাকে, যাদের প্রত্যেকের আবার ভ্যালু থাকে। এবং ৫ ভাবে অবজেক্ট তৈরি করা যায়। 


// // 1st rules: by object literals syntax
// const myName = {
//     firstName: 'Mahmud',
//     lastName: 'Hasan'
// }
// console.log(myName);




// // 2nd rules: by object constructor with new keyword
// const myName = {};
// myName.firstName = 'Mahmud';
// myName.lastName = 'Hasan';
// console.log(myName); // 2.1

// const myName2 = new Object(myName); // অর্থাৎ এভাবেও ডিক্লিয়ার করা যায়। 
// console.log(myName2); // 2.2 




// // 3rd rules: by constructor function with new keyword
// function MyName(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// const person1 = new MyName('Mahmud', 'Hasan');
// console.log(person1); // 3.1
// const person2 = new MyName('Jamal', 'Hasan');
// console.log(person2); // 3.2 // অর্থাৎ যতগুলো ইচ্ছা বানানো যাবে। 




// // 4th rules: by es6 class with new keyword
// class myName{
//     constructor (firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     age = 26;
// }
// const person1 = new myName('Mahmud', 'Hasan');
// console.log(person1); // 4.1
// const person2 = new myName('Jamal', 'Hasan');
// console.log(person2); // 4.2 অর্থাৎ যতগুলো ইচ্ছা বানানো যাবে। 



// // 5th rules: by object create method
// const myName = {
//     firstName: 'Mahmud',
//     lastName: 'Hasan'
// }
// const whoAmI = Object.create(myName);
// console.log(whoAmI.firstName);
// console.log(whoAmI.lastName); // অর্থাৎ পৃথক পৃথক প্রোপার্টি কে খুজে পেতে। 

const getGirlFriend= (name = "chokina")=>"name";
console.log(getGirlFriend()); 