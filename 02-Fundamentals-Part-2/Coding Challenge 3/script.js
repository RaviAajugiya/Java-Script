let mark = {
    fullName: 'Mark Miller',
    mass : 78,
    height : 1.69,

    calcBMI : function(){
        return this.mass / this.height ** 2;
    } 
};

let john = {
    fullName: 'John Smith',
    mass : 92,
    height : 1.95,

    calcBMI : function(){
        return this.mass / this.height ** 2;
    } 
}


console.log(mark.calcBMI());
