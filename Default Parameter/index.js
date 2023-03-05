function add(first, second = 0) { // এখানে second = 0 হচ্ছে default parameter;
    const total = first + second;
    return total;
}
// const result = add();
// console.log(result); // NaN, কারন first=undefined, second=0;

// const result = add(10);
// console.log(result); // 10, কারন first=10, second=0;

// const result = add(10, 20);
// console.log(result); // 30, কারন এখানে এসে default তথা second = 0 টা ইগনোর করবে। 

// বিঃদ্রঃ- default value সাধারণত ডান পাশে থাকে।
// বিঃদ্রঃ- উপরে function এর পরে first and second কে বলা হয় parameter, আর result = add(10, 20) এর ক্ষেত্রে ১০/২০ কে বলা হয় arguments.