const number1 = {
    a: 2,
    b: 3,
    c: 4
}

const number2 = {
    a: 2,
    b: 3,
    c: 4
}

const number3 = {
    a: 2,
    b: 3,
    d: 4
}

const number4 = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
}

// আগে array তে কনভার্ট করে তারপর লেন্থ চেক করে তারপর পরষ্পর ভ্যালু চেক করবে। 
const compare = (firstNumber, secondNumber) => {
    const firstKeys = Object.keys(firstNumber);
    const secondKeys = Object.keys(secondNumber);
    if(firstKeys.length === secondKeys.length) {
        for(const key of firstKeys) {
            if(firstNumber[key] !== secondNumber[key]) {
                return 'object gula same na';
            }
            else {
                return 'object gula same';
            }
        }
    }
    else {
        return 'length ek na'
    }
}
console.log(compare(number1, number4));