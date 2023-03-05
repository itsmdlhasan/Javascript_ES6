// function declaration অর্থাৎ ফাংশন এর default structure
function add(first, second) {
    const total = first + second;
    return total;
}

// function expression অর্থাৎ ফাংশনকে ভেরিয়েবল দ্বারা প্রকাশ করা। 
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}

// function expression with anonymous function অর্থাৎ নাম নাই এমন ফাংশন। 
const add2 = function (first, second) {
    const total = first + second;
    return total;
}

// arrow function অর্থাৎ function expression with anonymous function এর শর্টকাট রুপ।
const add3 = (first, second) => first + second;
console.log(add3(10, 20));

// more arrow function
const getFullName = (first, second) => first + ' ' + second;
console.log(getFullName('Mahmud', 'Hasan'));

// more arrow function
const multiply = (a, b) => a * b;
console.log(multiply(7, 8));

// more arrow function
const addAll = (a, b, c) => a + b + c;
console.log(addAll(30, 40, 50));

// arrow function with no parameter
const getPie = () => 3.14;
console.log(getPie());

// arrow function with single parameter
const doubleIt = (num) => num * 2;
console.log(doubleIt(3));

// more arrow function with single parameter
const y = num => num * num; // একটা প্যারামিটার থাকলে ব্রাকেট না দিলেও চলে।
const z = y(3);
console.log(z);

// arrow function with multi line
const doMath = (x, y, z) => {
    const sum = x + y;
    const subtract = y - z;
    const multiply = sum * subtract;
    return multiply; // multiline এর ক্ষেত্রে অবশ্যই return করতে হবে। 
}
console.log(doMath(3, 4, 2));