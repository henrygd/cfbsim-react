//////// HELPER FUNCTIONS ///////////

export const setPageTitle = titleContent => {
	document.title = `CFB SIM | ${titleContent}`;
};

export const randomTeam = () => {
	const teamKeys = window.teamKeys;
	const team = teamKeys[Math.floor(Math.random() * teamKeys.length)];
	return [team, window.teamRatings[team]];
};

export const grabTeam = team => {
	return [team, window.teamRatings[team]];
};


export function Team(teamName) {
	var rat = window.teamRatings[teamName];
	this.teamName = teamName; 
	this.runOff = rat[1];
	this.passOff = rat[2];
	this.runDef = rat[3];
	this.passDef = rat[4];
	this.spTeams = rat[5];
	this.discipline = rat[6];
	this.qualityPPG = rat[8];
	this.totalPoints = 0;
}
Team.prototype.driveAgainst = function(opponent) {
	var teamMagic = (this.qualityPPG * 7 + this.discipline) / (Math.random() * 20 + 2);
	var oppMagic = (opponent.qualityPPG * 7 + opponent.discipline) / (Math.random() * 20 + 2);
	// console log the magic for debugging
	// console.log(this.teamName + ' magic: ' + teamMagic + ', ' + opponent.teamName + ' magic: ' + oppMagic);
	var teamRand = Math.random();
	var oppRand	= Math.random();
	var rand21 = teamRand * 2 + 1;
	var rand35 = teamRand * 3 + 5;
	if ( ((this.runOff / rand21) + teamMagic) > (oppRand * (opponent.runDef * 3) + oppMagic) )
		return 7;
	else if ( ((this.passOff / rand21) + teamMagic) > (oppRand * (opponent.passDef * 3) + oppMagic) )
		return 7;
	else if ( (this.spTeams + teamMagic) / rand35 > oppRand * (opponent.spTeams + oppMagic) )
		return 3;
	else
		return 0;
};

export const ratings = [
	['Run Offense', 'Run Defense'],
	['Pass Offense', 'Pass Defense'],
	['Run Defense', 'Run Offense'],
	['Pass Defense', 'Pass Offense'],
	['Special Teams', 'Special Teams'],
	['Discipline', 'Discipline']
];

export const compareStrengths = (teamOneName, teamTwoName) => {
	const teamOne = new Team(teamOneName);
	const teamTwo = new Team(teamTwoName);
	let teamOneStrength = [0, 0];
	let teamTwoStrength = [0, 0];
	const compRats = [
		teamOne.runOff - teamTwo.runDef,
		teamOne.passOff - teamTwo.passDef,
		teamOne.runDef - teamTwo.runOff,
		teamOne.passDef - teamTwo.passOff,
		teamOne.spTeams - teamTwo.spTeams,
		teamOne.discipline - teamTwo.discipline
	];
	compRats.forEach(function(num, index) {
		if (num > teamOneStrength[1])
			teamOneStrength = [index, num];
		if (num < teamTwoStrength[1])
			teamTwoStrength = [index, num];
	});
	return [
		[teamOneStrength[1], ratings[teamOneStrength[0]], teamOneName, teamTwoName],
		[(teamTwoStrength[1] * -1), ratings[teamTwoStrength[0]], teamTwoName, teamOneName]
	];
};

// sim game function, team objects
export const simGame = (teamOne, teamTwo, gamesNum=500) => {
	var teamOneScore;
	var teamTwoScore;
	teamOne.wins = 0;
	teamTwo.wins = 0;
	// simulate x amount of games
	for (var games = 0; games < gamesNum; games++) {
		teamOneScore = 0;
		teamTwoScore = 0;
		// ten possesions for each team
		for (var possesions = 0; possesions < 13; possesions++) {
			teamOneScore += teamOne.driveAgainst( teamTwo );
			teamTwoScore += teamTwo.driveAgainst( teamOne );
		}
		// OVERTIME
		// if ( teamOneScore === teamTwoScore ) {
			while (teamOneScore === teamTwoScore) {
				teamOneScore += teamOne.driveAgainst( teamTwo );
				teamTwoScore += teamTwo.driveAgainst( teamOne );
			}
		// }
		// add to respective team's win number
		teamOne.totalPoints += teamOneScore;
		teamTwo.totalPoints += teamTwoScore;
		if (teamOneScore > teamTwoScore)
			teamOne.wins += 1;
		else
			teamTwo.wins += 1;
	}
	teamOne.avgScore = (teamOne.totalPoints / gamesNum).toFixed(1);
	teamTwo.avgScore = (teamTwo.totalPoints / gamesNum).toFixed(1);
	return {
		teamOne: teamOne,
		teamTwo: teamTwo
	};
};

// export const cfbAnimations = {
// 		showCounter: (el, cb) => {
// 			var start;
// 			function step(timestamp) {
// 				if (!start) start = timestamp;
// 				var progress = Math.round((timestamp - start)/4);
// 				el.innerHTML = Math.min(progress, 500);
// 				if (progress < 500) {
// 					requestAnimationFrame(step);
// 				} else {
// 					// slide down results
// 					setTimeout(cb, 300);
// 				}
// 			}
// 			requestAnimationFrame(step);
// 		},
		// showStats: (el, to, duration=800) => {
		// 	function dropDown(amount) {
		// 		const quarterHeight = document.body.clientHeight * 0.4;
		// 		if (amount > quarterHeight) {
		// 			amount = quarterHeight;
		// 			el.style.overflow = 'auto';
		// 		}
		// 		el.style.height = amount + 'px';
		// 	}
		// 	var start = el.clientHeight,
		// 		change = to - start,
		// 		currentTime = 0,
		// 		increment = 20;
		// 	var animateStats = function() {
		// 		// increment the time
		// 		currentTime += increment;
		// 		// find the value with the quadratic in-out easing function
		// 		var val = easeInOutQuad(currentTime, start, change, duration);
		// 		// increase the stats div height
		// 		dropDown(val);
		// 		// do the animation unless its over
		// 		if (currentTime < duration) {
		// 			requestAnimFrame(animateStats);
		// 		}
		// 	};
		// 	animateStats();
		// }
// };

