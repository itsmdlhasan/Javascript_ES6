const fish = {
    name: 'kala manik',
    address: 'chandpur',
    color: 'silver',
    phone: 0110000000,
    price: 400,
};

const {address} = fish;
console.log(address); // অর্থাৎ fish এর মধ্যকার address দেখতে চাওয়া হচ্ছে object destructuring. 

const [a, b] = [44, 55, 66];
console.log(a, b); // array destructuring 

const nayoks = ['shahrukh', 'tom', 'brad'];
const [king, daring, handsome] = nayoks;
console.log(handsome); // array destructuring দ্বারা 


function getNames() {
    return ['Alim', 'Halim', 'Dalim'];
}
const [baba, chacha] = getNames();
console.log(baba); // array হিসেবে ফাংশন রিটার্ন পাওয়া। 

const y = x => x*x;
const z = y(5);
console.log(z);