let colors = ['#f54336', '#ff9901', '#ffec3b', '#8cc44a', '#03aaf4', '#4051b6', '#9c27b0',];

hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

let rainbow = (hero.concat(native, destination)).reverse();

// --- Rainbow changes ver 1 ---//

rainbow.splice(0, 2, 'Richard', )
rainbow.pop();
rainbow.push('Gave', 'Ballte', destination[1],'Vain');

// --- Rainbow changes ver 2 ---//

// rainbow[0] = 'Richard';
// rainbow[1] = native[1];
// rainbow[2] = native[0];
// rainbow[3] = 'Gave';
// rainbow[4] = 'Ballte';
// rainbow[5] = destination[1];
// rainbow[6] = 'Vain';


document.write(`<div class="wrap"><div class="box">`);

for(i = 0; i < colors.length; i++) {
	document.write(`<div class="box-items">
	<div class="item-cover" style="background-color: ${colors[i]};"></div>
	<div class="item-text">${rainbow[i]}</div></div>
	`);
}

document.write(`</div></div>`);
