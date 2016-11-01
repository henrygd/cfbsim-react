const teamRatings = {"Cincinnati":[28,53,55,72,62,48,76,69,25,"0.206"],"Connecticut":[39,51,49,78,49,70,78,73,37,"0.267"],"East Carolina":[44,62,67,65,53,53,70,72,42,"0.378"],"Houston":[67,57,63,94,62,58,77,72,67,"0.687"],"Memphis":[54,67,61,62,64,80,69,68,53,"0.545"],"Navy":[59,73,61,63,51,60,95,69,59,"0.593"],"SMU":[48,64,48,63,68,57,78,73,47,"0.455"],"South Florida":[65,89,66,63,62,55,70,73,65,"0.698"],"Temple":[60,68,53,70,69,86,78,73,59,"0.637"],"Tulane":[37,68,34,69,60,60,75,67,36,"0.327"],"Tulsa":[61,68,57,64,64,77,70,71,61,"0.620"],"UCF":[52,61,47,81,68,52,65,74,51,"0.507"],"Boston College":[48,54,45,83,56,68,65,73,47,"0.388"],"Clemson":[87,64,75,73,93,77,67,80,88,"0.869"],"Duke":[46,58,55,65,61,54,71,74,44,"0.389"],"Florida State":[63,82,60,62,62,73,67,82,62,"0.646"],"Georgia Tech":[54,75,58,72,55,70,77,72,54,"0.548"],"Louisville":[77,99,82,88,63,67,64,87,76,"0.820"],"Miami (Florida)":[54,72,62,79,63,84,72,76,52,"0.578"],"North Carolina State":[54,57,63,81,61,59,72,77,53,"0.551"],"North Carolina":[67,65,77,70,60,72,60,75,67,"0.707"],"Pittsburgh":[59,68,65,73,52,70,78,74,58,"0.569"],"Syracuse":[51,53,69,62,58,60,66,76,51,"0.504"],"Virginia":[39,61,55,67,51,50,71,75,37,"0.272"],"Virginia Tech":[68,57,74,84,70,83,78,74,68,"0.769"],"Wake Forest":[57,57,39,78,62,59,86,72,57,"0.563"],"Baylor":[67,74,64,75,76,63,62,65,67,"0.721"],"Iowa State":[30,59,54,61,53,67,64,71,28,"0.185"],"Kansas":[28,50,44,57,52,45,60,75,25,"0.111"],"Kansas State":[59,71,47,80,54,83,78,73,59,"0.587"],"Oklahoma":[71,85,99,82,51,66,76,89,70,"0.768"],"Oklahoma State":[65,57,71,62,57,99,85,71,65,"0.696"],"TCU":[48,74,59,73,55,70,59,71,47,"0.435"],"Texas":[60,73,72,70,54,85,71,93,58,"0.608"],"Texas Tech":[51,59,92,57,46,60,56,73,50,"0.496"],"West Virginia":[74,69,65,70,61,60,70,72,74,"0.742"],"Illinois":[37,76,49,70,61,53,71,75,34,"0.326"],"Indiana":[57,67,64,77,67,70,76,89,55,"0.623"],"Iowa":[57,70,50,71,56,58,84,68,56,"0.557"],"Maryland":[59,85,49,60,63,61,70,70,58,"0.593"],"Michigan":[95,81,73,83,93,78,95,93,95,"0.931"],"Michigan State":[42,66,58,79,56,52,67,82,40,"0.348"],"Minnesota":[63,61,48,75,61,73,77,70,64,"0.633"],"Nebraska":[77,65,63,66,84,56,83,88,77,"0.769"],"Northwestern":[58,57,56,73,62,54,88,78,57,"0.590"],"Ohio State":[88,87,72,90,90,84,86,94,88,"0.916"],"Penn State":[73,70,66,68,73,76,85,93,72,"0.770"],"Purdue":[40,54,53,51,53,57,64,70,39,"0.253"],"Rutgers":[37,61,38,56,59,61,73,80,35,"0.252"],"Wisconsin":[75,67,55,89,87,65,96,97,74,"0.824"],"Charlotte":[39,63,49,69,48,47,64,70,38,"0.245"],"Florida Atlantic":[27,60,38,57,50,65,76,69,25,"0.141"],"Florida International":[43,67,52,63,52,60,69,86,41,"0.330"],"Louisiana Tech":[63,84,90,69,48,66,77,73,62,"0.663"],"Marshall":[34,51,58,61,51,56,63,69,32,"0.218"],"Middle Tennessee":[66,80,81,68,57,71,77,72,65,"0.715"],"North Texas":[47,71,37,61,69,52,70,71,46,"0.415"],"Old Dominion":[55,70,61,66,57,52,85,71,55,"0.568"],"Rice":[28,66,51,62,42,40,71,75,25,"0.113"],"Southern Mississippi":[57,62,66,56,56,82,59,70,56,"0.519"],"UTSA":[47,68,57,66,52,58,68,66,46,"0.398"],"UTEP":[39,74,56,62,50,53,69,87,36,"0.282"],"Western Kentucky":[61,74,87,92,54,90,66,76,60,"0.676"],"Army":[56,69,45,71,75,49,75,65,56,"0.584"],"BYU":[56,75,50,87,61,82,93,89,53,"0.597"],"Notre Dame":[49,67,65,89,60,65,69,88,47,"0.489"],"Akron":[48,67,63,60,49,69,59,71,47,"0.395"],"Ball State":[43,66,45,61,50,63,75,65,42,"0.331"],"Bowling Green":[28,58,43,62,41,59,56,75,25,"0.088"],"Buffalo":[34,63,41,57,61,40,67,63,32,"0.207"],"Central Michigan":[49,65,59,68,54,54,69,70,49,"0.451"],"Eastern Michigan":[49,55,63,75,49,72,69,70,48,"0.426"],"Kent State":[38,60,35,69,58,61,81,59,37,"0.314"],"Massachusetts":[35,61,51,64,48,49,60,73,33,"0.196"],"Miami (Ohio)":[39,53,54,74,60,50,64,69,38,"0.318"],"Northern Illinois":[34,73,58,63,51,55,69,69,32,"0.240"],"Ohio":[53,62,56,73,52,72,75,65,52,"0.484"],"Toledo":[57,61,93,58,53,57,62,64,57,"0.630"],"Western Michigan":[74,70,79,65,63,63,94,67,75,"0.798"],"Air Force":[51,61,57,78,56,71,75,65,50,"0.480"],"Boise State":[73,68,82,73,61,51,68,85,73,"0.763"],"Colorado State":[47,64,57,63,55,64,70,71,46,"0.416"],"Fresno State":[26,50,45,61,50,76,59,71,24,"0.115"],"Hawai'i":[44,72,57,56,54,75,64,71,42,"0.356"],"Nevada":[37,60,52,54,52,43,74,63,36,"0.244"],"New Mexico":[52,88,45,69,50,57,62,65,52,"0.486"],"San Diego State":[66,69,49,77,64,71,63,49,68,"0.685"],"San Jose State":[35,61,41,53,54,59,84,68,34,"0.239"],"UNLV":[37,74,46,68,48,55,69,67,36,"0.266"],"Utah State":[38,72,46,72,55,38,70,70,36,"0.294"],"Wyoming":[62,66,59,67,55,49,85,70,62,"0.618"],"Arizona":[38,75,50,60,54,53,72,78,36,"0.303"],"Arizona State":[57,59,51,74,43,87,79,77,57,"0.471"],"California":[58,78,83,57,62,66,70,91,57,"0.620"],"Colorado":[70,67,72,69,80,51,99,77,69,"0.766"],"Oregon":[45,84,72,55,50,72,61,76,43,"0.391"],"Oregon State":[40,84,37,61,58,75,66,78,37,"0.344"],"Stanford":[71,74,42,74,71,64,72,95,70,"0.736"],"UCLA":[51,49,66,70,79,56,76,89,49,"0.544"],"USC":[69,83,79,76,64,73,78,94,67,"0.756"],"Utah":[73,67,53,63,66,76,72,77,73,"0.720"],"Washington":[81,80,85,69,71,65,95,69,82,"0.866"],"Washington State":[71,66,75,75,55,38,70,72,72,"0.718"],"Alabama":[99,93,71,99,80,77,86,97,99,"0.940"],"Arkansas":[60,64,66,48,66,69,73,81,59,"0.520"],"Auburn":[70,85,69,81,67,88,84,91,68,"0.782"],"Florida":[79,65,59,90,99,68,75,87,79,"0.849"],"Georgia":[55,65,48,85,60,48,79,77,54,"0.538"],"Kentucky":[65,80,55,71,61,68,71,93,64,"0.671"],"LSU":[66,96,54,92,72,61,72,76,65,"0.763"],"Mississippi State":[45,69,55,67,50,59,73,61,44,"0.371"],"Missouri":[39,65,72,58,66,57,73,79,37,"0.365"],"Mississippi":[48,68,72,60,64,68,81,83,46,"0.490"],"South Carolina":[56,58,51,66,75,58,83,88,55,"0.560"],"Tennessee":[71,69,59,69,65,61,73,99,70,"0.708"],"Texas A&M":[84,91,58,68,71,95,80,79,85,"0.860"],"Vanderbilt":[56,66,39,70,58,67,89,79,55,"0.543"],"Appalachian State":[59,68,56,74,80,63,81,82,57,"0.640"],"Arkansas State":[36,49,48,60,50,52,52,47,36,"0.206"],"Georgia Southern":[42,54,44,59,52,76,58,51,41,"0.289"],"Georgia State":[31,46,43,64,69,42,64,54,30,"0.181"],"Idaho":[45,57,50,61,48,75,77,70,44,"0.339"],"Louisiana-Lafayette":[36,53,42,73,48,68,52,47,36,"0.200"],"Louisiana-Monroe":[30,59,46,50,49,52,69,67,29,"0.141"],"New Mexico State":[34,63,54,64,50,29,74,83,31,"0.201"],"South Alabama":[38,49,47,60,56,62,61,62,38,"0.264"],"Texas State":[31,44,47,62,44,67,61,61,30,"0.133"],"Troy":[59,57,61,72,60,78,62,47,61,"0.607"]}

// team, simGame functions
function Team(teamName) {
	var rat = teamRatings[teamName];
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

const simGame = (teamOne, teamTwo, gamesNum=500) => {
	var teamOneScore;
	var teamTwoScore;
	teamOne.wins = 0;
	teamTwo.wins = 0;
	// simulate x amount of games
	for (var games = 0; games < gamesNum; games++) {
		teamOneScore = 0;
		teamTwoScore = 0;
		// ten possesions for each team
		for (var possesions = 0; possesions < 14; possesions++) {
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

const teamOne = new Team('Alabama');
const teamTwo = new Team('Michigan');
// console.log(teamOne, teamTwo);
const result = simGame(teamOne, teamTwo, 500);

// console.log(result)


console.log(`${result.teamOne.teamName}: ${result.teamOne.wins} | ${result.teamTwo.teamName}: ${result.teamTwo.wins}\nAverage score: ${result.teamOne.avgScore} - ${result.teamTwo.avgScore}`)

// find winning pct
// const teamKeys = Object.keys(teamRatings);
// let winObj = {};
// let teamKeysClone = teamKeys.slice(0);
// const numGames = 100;
// while (teamKeysClone.length > 0) {
// 	const curTeam = teamKeysClone.pop();
// 	for (var i = 0; i < teamKeys.length; i++) {
// 		const opponent = teamKeys[i];
// 		if (opponent !== curTeam) {
// 			const result = simGame(new Team(curTeam), new Team(opponent), numGames);
// 			const resultWins = result.teamOne.wins;
// 			const curWins = winObj[curTeam];
// 			winObj[curTeam] = curWins ? (curWins + resultWins) : resultWins;
// 		}
// 	}
// }

// // for display
// var mapArr = teamKeys.map((team) => [team, winObj[team]]);
// mapArr.sort((a, b) => a[1] - b[1]).reverse().forEach((teamArr) => console.log(`${teamArr[0]}: ${teamArr[1]} (${(teamArr[1] / (teamKeys.length - 1) / numGames).toFixed(3)})`))

// teamKeys.forEach((team) => teamRatings[team].push((winObj[team] / (teamKeys.length - 1) / numGames).toFixed(3)))
// teamRatingArr = [teamRatings, curDate.toLocaleDateString()];
// writeThisFile(`./teamratings-${curDate.toISOString()}.json`, JSON.stringify(teamRatingArr), () => {
// 	writeThisFile('./../public/js/teamratings.json', JSON.stringify(teamRatingArr), () => console.log('All done!'));
// });
// }
