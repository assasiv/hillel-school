let sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

let summer_sports = sports.slice(2, 3).concat(sports.slice(5, 11));
let winter_sports = sports.slice(0, 2).concat(sports.slice(3, 5));
let fruits = summer_sports.splice(0, 1).concat(summer_sports.splice(2, 2));

console.log(`*** Winter sports ***`);
for(let i = 0; i < winter_sports.length; i++) {
	console.log(`${winter_sports[i][0]}: ${winter_sports[i][1]} `);
}

console.log('');
console.log(`*** Summer sports ***`);
for(let i = 0; i < summer_sports.length; i++) {
	console.log(`${summer_sports[i][0]}: ${summer_sports[i][1]} `);
}

console.log('');
console.log(`*** Fruits ***`);
for(let i = 0; i < fruits.length; i++) {
	console.log(`${fruits[i][0]}: ${fruits[i][1]} `);
}

