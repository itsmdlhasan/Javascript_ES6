class Animal { // এটা হচ্ছে superclass
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal { // এটা হচ্ছে subclass যার সাথে superclass কে extend করা হবে। 
  speak() {
    console.log(`${this.name} barks.`);
  }
}

let animal1 = new Animal('Cow'); // এখানে Cow argument টি constractor এর name নামক parameter এর ভ্যালু। 
let animal2 = new Animal('Rhino');
let dog1 = new Dog('Rex');
let dog2 = new Dog('Shephard');

animal1.speak();
animal2.speak();
dog1.speak(); // subclass কে call করা হয়েছে। 
dog2.speak(); 