import React from 'react';
import { setPageTitle, grabTeam } from '../helpers';
import { browserHistory } from 'react-router';
// import '../css/Rankings.css';
// import logo from './rankings.svg';

const TeamDiv = React.createClass({
	render() {
		const props = this.props;
		return (
			<div className='ranking-team'>
				<div className='ranking-team-info' style={{backgroundColor: 'rgba(' + localStorage['color_' + props.nameAbbr] + ', 0.65)', backgroundImage: `url('data:image/png;base64,${localStorage['logo_' + props.nameAbbr]}')`}}>
					<i>{props.i + 1}</i>{props.name}<span> | {props.rating}</span>
				</div>
			</div>
		);
	}
})

const Rankings = React.createClass({
	getInitialState: () => ({
		show: false
	}),
	render() {
	const teamWinPct = window.teamKeys.map((team) => [team, window.teamRatings[team][9]]).sort((a, b) => b[1] - a[1]);
		return (
			<div className={'rankings' + (this.state.show ? ' show-el' : '')}>
				<h1 className='ranking-logo'>Team Rankings</h1>
				<p>Based on combined win percentage of team in 50 simulated games against each other team. Updated { window.lastUpdate }.</p>
				<p><a className="arrow-link" href="/" onClick={this.switchPage}>Sim Games</a></p>
				<div className='rankings-list'>
					{ teamWinPct.map((teamArr, i) => <TeamDiv key={i} i={i} name={teamArr[0]} rating={teamArr[1]} nameAbbr={teamArr[0].replace(/\W/g, '')} />) }
				</div>
			</div>
		);
	},
	componentDidMount() {
		setPageTitle('Team Rankings');
		document.body.scrollTop = 0;
		document.getElementById('back_image').style.willChange = 'transform';
		setTimeout(() => this.setState({show: true}), 10);
	},
	componentWillUnmount() {
		document.getElementById('back_image').style.willChange = '';
	},
	switchPage(e) {
		e.preventDefault();
		const pathname = window.curTeams ? window.curTeams : [grabTeam()[0], grabTeam()[0]]
		this.setState({show: false});
		setTimeout(() => {
			browserHistory.push(`/${pathname[0]}/${pathname[1]}`);
		}, 410);
	}
});

export default Rankings;