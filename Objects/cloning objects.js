const a = {
    name: 'Mahmud',
    age: 26,
    height: '5.6'
}

// 1st rule: by equal sign
const b = a; // এভাবেও সরাসরি কপি করা যায় কিন্তু compare এর ক্ষেত্রে এটা অসুবিধাজনক, কারন এরা একই জিনিস কে রেফার করে।
console.log(b);

// 2nd rule: by shallow copy
const c = {...a}; // এভাবে ক্লোন করা বেশি সুবিধাজনক, কারন এখানে দুইটা আলাদা আলাদা জিনিস কে রেফার করে অর্থাৎ নতুন আরেকটা ভেরিয়েবল তৈরি হয়। এবং এটাকে Shallow copy বলে। 
console.log(c);

// 3rd rule: by json convert (deep copy, এর দ্বারা object data টা নতুন করে তৈরি হয়, ফলে আগেরটার সাথে এটার রিলেশন থাকেনা।)
const d = JSON.stringify(a);
const revert = JSON.parse(d);
d.age = 50; // এটা আর চেঞ্জ হবে না। কারন string এ কনভার্ট করার পর সম্পর্ক ব্রেক হয়ে গেছে। 
console.log(revert);