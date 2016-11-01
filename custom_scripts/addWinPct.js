#! /usr/local/bin/node

const fs = require('fs');
const curDate = new Date();

console.log('Adding win pct to teamratings...');

fs.readFile('./teamratings.json', 'utf8', (err, teamratingsText) => {
	if (err) return console.error(err);
	addWinPct(JSON.parse(teamratingsText));
});

const addWinPct = teamRatings => {
	// team, simGame functions
	function Team(teamName){
		var rat = teamRatings[teamName];
		this.teamName = teamName; 
		this.overall = rat[0];
		this.runOff = rat[1];
		this.passOff = rat[2];
		this.runDef = rat[3];
		this.passDef = rat[4];
		this.spTeams = rat[5];
		this.discipline = rat[6];
		this.qualityPPG = rat[8];
		this.totalPoints = 0;
	}
	Team.prototype.driveAgainst = function(opponent){
		var teamMagic = (this.qualityPPG * 7 + this.discipline) / (Math.floor((Math.random() * 20) + 2));
		var oppMagic = (opponent.qualityPPG * 7 + opponent.discipline) / (Math.floor((Math.random() * 20) + 2));
		var teamRand = Math.random();
		var oppRand	= Math.random();
		var rand23 = teamRand * 2 + 1;
		var rand26 = teamRand * 3 + 5;
		if ( ((this.runOff / rand23) + teamMagic) > (oppRand * (opponent.runDef * 3) + oppMagic) )
			return 7;
		else if ( ((this.passOff / rand23) + teamMagic) > (oppRand * (opponent.passDef * 3) + oppMagic) )
			return 7;
		else if ( (this.spTeams + teamMagic) / rand26 > oppRand * (opponent.spTeams + oppMagic) )
			return 3;
		else
			return 0;
	};
	const simGame = (teamOne, teamTwo, gamesNum=500) => {
		var teamOneScore;
		var teamTwoScore;
		// res
		teamOne.wins = 0;
		teamTwo.wins = 0;
		// simulate x amount of games
		for (var games = 0; games < gamesNum; games++) {
			teamOneScore = 0;
			teamTwoScore = 0;
			// ten possesions for each team
			for (var possesions = 0; possesions < 11; possesions++) {
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

	// find winning pct
	const teamKeys = Object.keys(teamRatings);
	let winObj = {};
	let teamKeysClone = teamKeys.slice(0);
	const numGames = 50;
	while (teamKeysClone.length > 0) {
		const curTeam = teamKeysClone.pop();
		for (var i = 0; i < teamKeys.length; i++) {
			const opponent = teamKeys[i];
			if (opponent !== curTeam) {
				const result = simGame(new Team(curTeam), new Team(opponent), numGames);
				const resultWins = result.teamOne.wins;
				const curWins = winObj[curTeam];
				winObj[curTeam] = curWins ? (curWins + resultWins) : resultWins;
			}
		}
	}

	// // for display
	// var mapArr = teamKeys.map((team) => [team, winObj[team]]);
	// mapArr.sort((a, b) => a[1] - b[1]).reverse().forEach((teamArr) => console.log(`${teamArr[0]}: ${teamArr[1]} (${(teamArr[1] / (teamKeys.length - 1) / numGames).toFixed(3)})`))

	// output
	const writeThisFile = (fileName, data, cb) => {
		fs.writeFile(fileName, data, (err) => {
			if (err) return console.error(err);
			cb();
		})
	}
	
	teamKeys.forEach((team) => teamRatings[team].push((winObj[team] / (teamKeys.length - 1) / numGames).toFixed(3)))
	teamRatingArr = [teamRatings, curDate.toLocaleDateString()];
	writeThisFile(`./teamratings-${curDate.toISOString()}.json`, JSON.stringify(teamRatingArr), () => {
		writeThisFile('./../public/js/teamratings.json', JSON.stringify(teamRatingArr), () => console.log('All done!'));
	});
}
