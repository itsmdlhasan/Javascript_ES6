const student = {
    name: 'Hasan',
    field: 'Kalurghat',
    activity: function(time){
        return (this.name + ' ' + time + ' tar somoy' + ' ' + this.field + ' mathe khelte geche');
    },
    punishment: function(count){
        return `${this.name} ke ${count} bar kan dhore uthabosha korano hok`;
    }
}

const player = {
    name: 'Kablu',
    position: 'fielder'
}

// 1st rules: by call
const result = student.punishment.call(player, 5); // this name er value hobe player theke, parameter o notun kore bosano jabe
console.log(result);

// 2nd rules: by apply
const result2 = student.punishment.apply(player, [5]); // parameter গুলো array এর মধ্যে দিতে হবে। 
console.log(result2);

// 3rd rules: by bind
const newRules = student.punishment.bind(player); 
const result3 = newRules(5) // function টাকে পুরোপুরি আলাদা ভাবে parameter দিয়ে কল করা। 
console.log(result3);