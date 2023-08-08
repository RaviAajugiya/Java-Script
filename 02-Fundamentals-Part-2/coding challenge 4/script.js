
const calcTip = bill => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const calcAvg = bill => {
    sum = 0;
    for (let i = 0; i < bill.length; i++) {
        sum += bill[i];        
    }
    return sum / bill.length;
}

let bill = [22,295,176,440,37,105,10,1100,86,52];
let tip = [];
let total = [];

for (let i = 0; i < bill.length; i++) {
    tip.push(calcTip(bill[i]));
    total.push(calcTip(bill[i]) + bill[i]) ;   
}

console.log(bill,tip,total);
console.log(calcAvg(total));