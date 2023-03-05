const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce ((previous, current) => { // sum without initial value
    return previous + current;
});
console.log(sum);

const total = numbers.reduce ((previous, current) => { // sum with initial value
    return previous + current;
}, 30);
console.log(total);

const difference1 = numbers.reduce ((previous, current) => { // subtraction without initial value
    return previous - current;
});
console.log(difference1);

const difference2 = numbers.reduce ((previous, current) => { // subtraction with initial value
    return previous - current;
}, 30);
console.log(difference2);

// অর্থাৎ initial value না দেওয়া থাকলে array এর প্রথম ভ্যালু টাই initial বা previous value, এটাকেই প্রথমে বসিয়ে তারপর ফাংশন এপ্লাই হতে থাকে একে একে সকলের উপর। 