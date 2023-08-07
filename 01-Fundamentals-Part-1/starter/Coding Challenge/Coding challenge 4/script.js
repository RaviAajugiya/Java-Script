let bill = 40;

let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

console.log(`bill = ${bill},
tip = ${tip},
total bill = ${tip + bill}`);