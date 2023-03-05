// this তার নিজের পজিশন অনুযায়ী নিজেকে রেফার করে। 

console.log(this); // this টি সাধারনভাবে পুরো window কে দেখাচ্ছে। 

const example1 = () => {
    return this;
}
console.log(example1()); // this টি arrow function থেকে বাহিরে এসেছে। 

const object = {
    name: 'Mahmud',
    age: 'Hasan',
    designation: function() {
        return this;
    }
}
console.log(object); // arrow function বাদে সাধারন ফাংশনে রাখলে this টি নিজের ব্রাকেটের মধ্যকার পুরো টাকে object হিসেবে দেখাবে। 


const object2 = {
    name: 'Mahmud',
    age: 'Hasan',
    designation: function() {
        const nestedDesignation = () => {
            return this;
        }
    }
}
console.log(object); // এখানেও arrow function থেকে বের হয়েছে কিন্তু পারেন্ট আরেকটা ব্রাকেট থাকায় সেটাকে অবজেক্ট হিসেবে দেখাচ্ছে। যার কারনে দুইটার রেজাল্ট সেম। যদি এই পারেন্ট ব্রাকেট কে খুজে না পেত তাহলে আবারো ফুল window কে অবজেক্ট হিসেবে দেখাতো। অর্থাৎ this উপরের দিকে উঠতে থাকে bubbble এর মত। 