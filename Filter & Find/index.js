const a = [20, 30, 40, 33, 20, 12, 99];

const evenNumber = a.filter (number => number % 2 === 0); // যারা শর্ত পূরন করবে তাদের সবাইকে দেখাবে। 
console.log(evenNumber);

const oddNumber = a.find (number => number % 2 !== 0); // যারা শর্ত পূরণ করবে তাদের মধ্যে শুধু প্রথম টাকে দেখাবে। 
console.log(oddNumber);