let vm = {
    personname : [
        {
            name: 'duvie',   age : 26
        },
        {
            name : 'got the name',
            age : 30
        }
    ],

    getname : function(){
        this.personname.forEach(function(person, index){
            console.log(person.name);
        });
    }
}
module.exports = vm;