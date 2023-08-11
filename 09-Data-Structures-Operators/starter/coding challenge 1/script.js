const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 5.5,
    },
};

for (const [index, val] of game.scored.entries()) {
    console.log(`goal ${index + 1}: ${val}`);
}

sum = 0;
for (const odd of Object.values(game.odds)) {
    sum += odd;
}
console.log(sum / Object.values(game.odds).length);
for (const [key, val] of Object.entries(game.odds)) {
    const teamStr = key === 'x' ? 'draw' : 'victory';
    console.log(`odd of ${teamStr} ${game[key]}: ${val}`);
}

const scorers = {};
for (const player of game.scored) {
    console.log(player);
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers);


// const [players1, players2] = game.players;
// console.log(players1,players2);

// const [gk, ...fieldPlayers] = players1;
// console.log(gk,fieldPlayers);

// const allPlayers = [...players1,...players2]
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const {team1, x:draw, team2} = game.odds;
// console.log(team1,draw,team2);

// const printGoals = function(...players){
//     console.log(`${players.length} goal scored`);
// }

// printGoals('Davies', 'Muller', 'Lewandowski');
// printGoals(...game.scored);

// team1 > team2 && console.log(`team 1 will win`);
// team1 < team2 && console.log(`team 2 will win`); 

