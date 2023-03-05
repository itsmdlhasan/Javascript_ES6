const student = {
    name: 'Hasan',
    field: 'Kalurghat',
    activity: function(time){
        return (this.name + ' ' + time + ' tar somoy' + ' ' + this.field + ' mathe khelte geche');
    },
    punishment: function(count){
        this.activity();
        return `${this.name} ke ${count} bar kan dhore uthabosha korano hok'`;
    }
}

const sports = student.activity(3);
console.log(sports);
const punishment = student.punishment(20);
console.log(punishment);