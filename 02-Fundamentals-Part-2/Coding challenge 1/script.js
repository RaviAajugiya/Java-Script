const dolphins1 = 85;
const dolphins2 = 54;
const dolphins3 = 41;

const koalas1 = 23;
const koalas2 = 34;
const koalas3 = 27;

const calcAvg = (s1, s2, s3) => (s1+s2+s3)/3;

const avgDolphins = calcAvg(dolphins1,dolphins2,dolphins3);
const avgKoalas = calcAvg(koalas1,koalas2,koalas3);

console.log(avgDolphins,avgKoalas);

const checkWinner = function(avgDolphins,avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log(`dolphins wins ${avgDolphins} vs ${avgKoalas}`);
    }else if(avgKoalas >= 2 * avgDolphins){
        console.log(`Koalas wins ${avgDolphins} vs ${avgKoalas}`);
    }else{
        console.log('no wins');
    }
}

checkWinner(avgDolphins, avgKoalas);