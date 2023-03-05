const day = 'din the day';
console.log(day);
try {
    console.log(district); // এই লাইনে error দেখাবে কারন let variable দিয়ে কিছু declare করলে সেটা console এর আগেই করতে হয়। 
    let district = 'bBaria';
}
catch {
    console.log('cholbe');
}
finally {
    console.log('niche');
}
const myName = 'Mahmud';
console.log(myName);