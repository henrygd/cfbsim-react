import React from 'react';
import { compareStrengths, grabTeam, setPageTitle } from '../helpers';
import TeamPanel from './TeamPanel';
import { Link, browserHistory } from 'react-router';


const SimContainer = React.createClass({
	getInitialState: () => ({
		show: false
	}),
	componentDidMount() {
		const { teamOne, teamTwo } = this.props.params;
		setPageTitle('Choose Teams');
		window.curTeams = [teamOne, teamTwo];
		setTimeout(() => this.setState({show: true}), 10);
	},
	render() {
		const props = this.props;
		const params = props.params;
		const teamOne = grabTeam(params.teamOne);
		const teamTwo = grabTeam(params.teamTwo);
		const strengths = compareStrengths(teamOne[0], teamTwo[0]);
		const teamOneAbbr = teamOne[0].replace(/\W/g, '');
		const teamTwoAbbr = teamTwo[0].replace(/\W/g, '');
		return (
			<div id='sim_container' className={this.state.show ? 'show-el' : ''}>
				<h1 className="heading">CFB SIM</h1>
				<TeamPanel 
					team={teamOne}
					changeTeam={(teamName) => {
						window.curTeams[0] = teamName;
						browserHistory.replace(`/${teamName}/${teamTwo[0]}`);
					}}
					/>
				<TeamPanel 
					team={teamTwo}
					changeTeam={(teamName) => {
						window.curTeams[1] = teamName;
						browserHistory.replace(`/${teamOne[0]}/${teamName}`)
					}}
					/>

				<div className="team-matchup">
					<h2 style={{backgroundColor: 'rgb(' + localStorage['color_' + teamOneAbbr] + ')'}}>{teamOne[0]}</h2>
					<span>vs</span>
					<h2 style={{backgroundColor: 'rgb(' + localStorage['color_' + teamTwoAbbr] + ')'}}>{teamTwo[0]}</h2>
				</div>
				<Link to={`/${teamOne[0]}/${teamTwo[0]}/sim`}><button className="btn-sim helmet-icon">SIMULATE MATCHUP</button></Link>

				<div className="compare-strengths team-panel-cells">
					<a href='/rankings' onClick={this.switchPage}><button className='arrow-link'>TEAM RANKINGS</button></a>
					<h4>Biggest Strengths</h4>

					<div id="compare_team_one" className="panel-cell">
						<div className="comp-strength-logo" style={{backgroundImage: 'url(data:image/png;base64,' + localStorage['logo_' + teamOneAbbr] + ')'}}></div>
							{strengths[0][0] > 0 ?
								<h3><span>+{ strengths[0][0] }</span> <i>{ strengths[0][1][0] }</i> vs <i style={{backgroundImage: 'url(data:image/png;base64,' + localStorage['logo_' + teamTwoAbbr] + ')'}}></i>{ strengths[0][1][1] }</h3> :
								// eslint-disable-next-line
								<h3> ¯\_(ツ)_/¯</h3>}
						<div className="meter" style={ this.getMeterStyle(strengths[0][0]) }></div>
					</div>

					<div id="compare_team_two" className="panel-cell">
						<div className="comp-strength-logo" style={{backgroundImage: 'url(data:image/png;base64,' + localStorage['logo_' + teamTwoAbbr] + ')'}}></div>
							{strengths[1][0] > 0 ?
								<h3><span>+{ strengths[1][0] }</span> <i>{ strengths[1][1][1] }</i> vs <i style={{backgroundImage: 'url(data:image/png;base64,' + localStorage['logo_' + teamOneAbbr] + ')'}}></i>{ strengths[1][1][0] }</h3> :
								// eslint-disable-next-line
								<h3> ¯\_(ツ)_/¯</h3>}
						<div className="meter" style={ this.getMeterStyle(strengths[1][0]) }></div>
					</div>
				</div>
				{ props.children }
			</div>
		);
	},

	// generate style for scaling the compare strength meters
	getMeterStyle(num) {
		var transform;
		num = num < 50 ? num *= 2 : 99;
		num = num < 10 ? `0${num}` : num;
		transform = `scale3d(.${num}, 1, 1)`;
		return {WebkitTransform: transform, transform: transform};
	},

	switchPage(e) {
		e.preventDefault();
		this.setState({show: false});
		setTimeout(() => {
			browserHistory.push('/rankings');
		}, 410);
	}
});

export default SimContainer;
