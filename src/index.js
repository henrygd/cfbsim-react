import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { randomTeam } from './helpers';

import SimContainer from './components/SimContainer';
import SimModal from './components/SimModal';
import Rankings from './components/Rankings';

import './index.css';

const rootElement = document.getElementById('root');

const checkTeamParams = (nextState, replace) => {
	const { teamOne, teamTwo } = nextState.params;
	const teamKeys = window.teamKeys
	const teamOneValid = teamKeys.indexOf(teamOne) > -1;
	const teamTwoValid = teamKeys.indexOf(teamTwo) > -1;
	if (!teamOneValid || !teamTwoValid) {
		replace(`/${teamOneValid ? teamOne : randomTeam()[0]}/${teamTwoValid ? teamTwo : randomTeam()[0]}`);
	}
}

const routes = (
	<Route path='/'>
		<IndexRoute onEnter={checkTeamParams} />
		<Route path='rankings' component={Rankings} />
		<Route path=':teamOne/:teamTwo' component={SimContainer} onEnter={checkTeamParams}>
			<Route path='sim' component={SimModal} />
		</Route>
		<Route path='*' onEnter={checkTeamParams} />
	</Route>
);

function run() {
	ReactDOM.render(
			<Router history={browserHistory}>
				{routes}
			</Router>, rootElement
	);
}

function _init() {
	// var teamOne, teamTwo;
	// const path = window.location.pathname;
	rootElement.className = 'scanlines';
	// if (path === '/') {
	// 	teamOne = randomTeam()[0];
	// 	teamTwo = randomTeam()[0];
	// 	browserHistory.replace(`/${teamOne}/${teamTwo}`);
	// }
	run();
}



function fetchData(url, method, cb) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			var status = xhr.status;
			if (status === 200) {
				// success
				cb(xhr.responseText);
			} else {
				alert('Error: Failed to load needed assets');
			}
		}
	};
	xhr.send();
}

// get team rankings & (if needed) logos
fetchData(`/js/teamratings.json?${+new Date()}`, 'GET', function(data) {
	var teams;
	try {
		teams = JSON.parse(data);
	} catch(err) {
		return alert ('Error: Could not fetch team rankings.');
	}
	// grabbed teams successfully
	window.teamRatings = teams[0];
	window.lastUpdate  = teams[1];
	window.teamKeys = Object.keys(teams[0]);
	// check if team logos are pre-cached in localStorage
	if (localStorage !== null) {
		if (localStorage.color_LSU) {
			// go on with loading the page
			setTimeout(_init, 500);
		} else {
			// get logos
			window.processLocalStore = function(data) {
				data.forEach(function(arr) {
					localStorage['logo_'+arr[0]]=arr[1];
					localStorage['color_'+arr[0]]=arr[2];
				});
				setTimeout(_init, 500);
			};
			var tag = document.createElement('script');
			tag.src = '/js/localStoreTeams.js';
			document.body.appendChild(tag);
		}
	} else {
		// if no local storage alert error
		alert('To use this website, please download a browser that supports local storage.');
	}
});

// es6 async scratched due to extra 2kb build size
// // async function to grab team ratings
// async function fetchJSON(url, errMsg, cb) {
//   try {
//     const response = await fetch(url);
//     cb(await response.json());
//   }
//   catch (err) {
//     alert(errMsg);
//     console.log(err);
//   }
// }

// // grab team ratings / check local storage for team info
// fetchJSON(`/js/teamratings.json?${+new Date()}`, 'Error: Failed to fetch teams', (data) => {
// 	// grabbed teams successfully
// 	window.teamRatings = data;
// 	// check if team logos are pre-cached in localStorage
// 	if (localStorage !== null) {
// 		if (localStorage.color_Michigan) {
// 			// go on with loading the page
// 			setTimeout(_init, 500);
// 		} else {
// 			// get logos
// 			window.processLocalStore = function(data) {
// 				data.forEach(function(arr) {
// 					localStorage['logo_'+arr[0]]=arr[1];
// 					localStorage['color_'+arr[0]]=arr[2];
// 				});
// 				setTimeout(_init, 500);
// 			};
// 			var tag = document.createElement('script');
// 			tag.src = '/js/localStoreTeams.js';
// 			document.body.appendChild(tag);
// 		}
// 	} else {
// 		// if no local storage alert error
// 		alert('To use this website, please download a browser that supports local storage.');
// 	}
// });