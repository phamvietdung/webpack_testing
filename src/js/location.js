var vm = {
    cities : [
        "Ha Noi", "Ho Chi Minh"
    ],
    print : function(){
        this.cities.forEach(x => console.log(x));
    }
}

module.exports = vm;