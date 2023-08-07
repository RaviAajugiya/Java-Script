// const dolphins1 = 96;
// const dolphins2 = 108;
// const dolphins3 = 89;

// const koalas1 = 88;
// const koalas2 = 91;
// const koalas3 = 110;

// const dolphins1 = 97;
// const dolphins2 = 112;
// const dolphins3 = 101;

// const koalas1 = 109;
// const koalas2 = 95;
// const koalas3 = 123;

const dolphins1 = 97;
const dolphins2 = 112;
const dolphins3 = 101;

const koalas1 = 109;
const koalas2 = 95;
const koalas3 = 106;

const dolphinsAvg = (dolphins1 + dolphins2 + dolphins3) / 3;
const koalasAvg = (koalas1 + koalas2 + koalas3) / 3;
console.log(dolphinsAvg, koalasAvg);

if(dolphinsAvg > koalasAvg && dolphinsAvg >= 100){
    console.log(`winner is dolphins`);
}else if(dolphinsAvg == koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100){
    console.log(`Draw`);
}else if(koalasAvg >= 100){
    console.log(`winner is koalas`);
}else{
    console.log(`no one wons`);
}

