const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1
}
// property গুলোকে বলে keys, মান গুলোকে বলে values;

const keys = Object.keys(bottle); // key পাওয়ার জন্য। 
console.log(keys); 
const values = Object.values(bottle); // value পাওয়ার জন্য। 
console.log(values);
const pair = Object.entries(bottle); // key:value pair পাওয়ার জন্য। 
console.log(pair);
delete bottle.isCleaned;
console.log(bottle); // property কে ডিলিট করার জন্য। 
Object.seal(bottle); // property কে seal করার জন্য যাতে add বা delete কাজ না করে, এবং নতুন প্রোপার্টি ও এড করা যায়না। কিন্তু মডিফাই করা যায়। 
bottle.age = 26;
console.log(bottle);
delete bottle.capacity;
console.log(bottle);
bottle.price = 1000; // অর্থাৎ seal করলেও প্রাইস বাড়ানো যাবে। 
console.log(bottle);
Object.freeze(bottle);
bottle.price = 40;
console.log(bottle); // অর্থাৎ freeze হলো seal থেকেও পাওয়ারফুল, কারন freeze করলে মডিফাই ও করা যায়না। 