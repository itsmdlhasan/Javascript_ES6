const bottle = {
    color: 'yellow',
    price: 50,
    isCleaned: true,
    capacity: 1
}

// 1st Rule to get Keys of Object: object এর keys গুলোকে আগে array তে কনভার্ট করে নিয়ে তারপর for of loop চালালে keys গুলো পাওয়া যায়। 
const keys = Object.keys(bottle);
for(const key of keys) {
    console.log(key)
}

// 2nd Rule to get Keys of Object: সরাসরি for in loop দ্বারা object এর keys গুলো পাওয়ার জন্য। 
for(const key in bottle) {
    console.log(key)
}


// 1st Rule to get value of Object: object এর values গুলোকে আগে array তে কনভার্ট করে নিয়ে তারপর for of loop চালালে value গুলো পাওয়া যায়। 
const value = Object.values(bottle);
for(const value of bottle) {
    console.log(value)
}


// 2nd Rule to get Values of Object: for in দ্বারা bracket notation এর সাহায্যে property গুলোর value ও জানা যায়। 
for(const value in bottle) {
    console.log(bottle[value])
}


// 1st Rule to get both at the same time by for in loop
for(const pair in bottle) {
    console.log(pair, bottle[pair])
}


// 2nd Rule to get both at the same time by for of loop: আগে key value pair কে একসাথে array তে কনভার্ট করে নিয়ে তারপর for of loop চালালেও হয়। 
const pair = Object.entries(bottle);
for(const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}