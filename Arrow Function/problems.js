/* Problem-1: Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result. */
const a = (x, y, z) => x * y * z;
console.log(a(5, 5, 5));


/* Problem-2: Write the following sentence in three lines and print the result:
I am a web developer. I love to code. I love to eat biryani. */
const sentence = `I am a web developer.
I love to code.
I love to eat biryani.`
console.log(sentence);


/* Problem-3: Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. */
const addition = (num1, num2 = 5) => num1 + num2;
console.log(addition(4));


/* Problem-4: Write an arrow function where it will do the following:
a) It will take an array where the array elements will be the
name of your friends
b) Check if the length of each element is even, push elements
with even length to a new array and return the result
Print the result. */
const friendsName = ['Ashik', 'Razu', 'Opu', 'Jhorna', 'gyotiz'];
// regular function
function evenFinder() {
    const evenFriend = [];
    for (const friendName of friendsName) {
        if (friendName.length % 2 === 0) {
            evenFriend.push(friendName);
        }
    }
    return evenFriend;
}
console.log(evenFinder());
// arrow function 
const evenFriends = () => {
    const evenFriend = [];
    for (const friendName of friendsName) {
        if (friendName.length % 2 === 0) {
            evenFriend.push(friendName);
        }
    }
    return evenFriend;
}
console.log(evenFriends());


/* Problem-5: Write an arrow function where it will do the following:
a) Square each array element
b) Calculate the sum of the squared elements
c) Return the average of the sum of the squared elements
Print the result. */
const elements = [2, 4, 6];
const arrowAverage = () => {
    let sumElements = [];
    for (const element of elements) {
        const square = element * element;
        sumElements.push(square);
    }
    let sum = 0;
    for (const sumElement of sumElements) {
        sum = sum + sumElement;
    }
    return sum;
}
console.log(arrowAverage());







/* Problem-6: Write an arrow function where it will do the following:
a) It will take two array inputs
b) Combine the two arrays and assign them in a new array
c) Find the maximum number from the new array and return the
result
Print the result. */
// const m = [10, 20];
// console.log(m);
// const n = [30, 40];
// console.log(n);
// const combineArray = [...m, ...n];
// console.log(combineArray);
// const maxNumber = Math.max(...combineArray);
// console.log(maxNumber);
const m = [10, 100];
const n = [30, 80];
const o = (m, n) => {
    const combine = [...m, ...n];
    const maximum = Math.max(...combine);
    return maximum;
}
console.log(o(m, n));