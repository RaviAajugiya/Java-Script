const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.88;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const ismarkHigherBMI = markBMI > johnBMI;
console.log(ismarkHigherBMI);
console.log(markBMI,johnBMI);

if(ismarkHigherBMI){
    console.log('mark BMI is higher than john');
}else{
    console.log('john BMI is higher than mark');
}
