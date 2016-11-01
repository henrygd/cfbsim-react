import React from 'react';
import { randomTeam } from '../helpers';


const TeamPanel = React.createClass({
	getInitialState: () => ({
		dropdownOpen: false
	}),
	render() {
		const props = this.props;
		const ratingArr = props.team[1];
		const teamKeys = window.teamKeys;
		const teamListItem = (team, i) => <li onClick={this.getThisTeam} key={i}>{team}</li>;

		return (<div className='team-panel'>
				<div className='logo-container scanlines'>
					<img alt='team_logo' className='logo' ref='logo' src={'data:image/png;base64,' + localStorage['logo_' + props.team[0].replace(/\W/g, '')]}/>
					<button className='random-icon random-btn' onClick={() => props.changeTeam(randomTeam()[0])}></button>
				</div>
				
				<div className='team-panel-cells'>

				<div className={'custom-select panel-cell' + (this.state.dropdownOpen ? ' select-active' : '')} onClick={this.toggleDropdown} style={{backgroundColor: 'rgb(' + localStorage['color_' + props.team[0].replace(/\W/g, '')] + ')'}}>
					<div className='name-container'>
						<span className='team-name'>{ props.team[0] }</span>
					</div>

					<ul className='select-options'>
						<h4>American Athletic</h4>
							{teamKeys.slice(0, 12).map((team, i) => teamListItem(team, i))}
						<h4>ACC</h4>
							{teamKeys.slice(12, 26).map((team, i) => teamListItem(team, i))}
						<h4>Big 12</h4>
							{teamKeys.slice(26, 36).map((team, i) => teamListItem(team, i))}
						<h4>Big Ten</h4>
							{teamKeys.slice(36, 50).map((team, i) => teamListItem(team, i))}
						<h4>Conference USA</h4>
							{teamKeys.slice(50, 63).map((team, i) => teamListItem(team, i))}
						<h4>Independents</h4>
							{teamKeys.slice(63, 67).map((team, i) => teamListItem(team, i))}
						<h4>Mid-American</h4>
							{teamKeys.slice(67, 79).map((team, i) => teamListItem(team, i))}
						<h4>Mountain West</h4>
							{teamKeys.slice(79, 91).map((team, i) => teamListItem(team, i))}
						<h4>PAC 12</h4>
							{teamKeys.slice(91, 103).map((team, i) => teamListItem(team, i))}
						<h4>SEC</h4>
							{teamKeys.slice(103, 117).map((team, i) => teamListItem(team, i))}
						<h4>Sun Belt</h4>
							{teamKeys.slice(117, 128).map((team, i) => teamListItem(team, i))}
					</ul>
				</div>

					<div className='rating panel-cell overall scanlines' style={{backgroundColor: 'rgba(' + this.getOverallColor() + ', .85)'}}>
						<h3><span>{ ratingArr[0] }</span> Overall</h3>
					</div>

					{['Run Offense', 'Pass Offense', 'Run Defense', 'Pass Defense', 'Special Teams', 'Discipline', 'Strength of Schedule'].map((cat, i) => {
						return (
							<div className="rating panel-cell" key={i}>
								<h3><span>{ ratingArr[i + 1] }</span> { cat }</h3>
								<div className='meter' style={this.adjustMeter(ratingArr[i + 1])}></div>
							</div>
						);
					})}

				</div>
			</div>);
	},
	getOverallColor() {
		const overall = this.props.team[1][0];
		if (overall < 50) {
			return '229, 57, 53';
		} else {
			return overall < 75 ? '243, 182, 0' : '35, 182, 53';
		}
	},
	getThisTeam(e) {
		const team = e.target.innerHTML.replace('&amp;', '&');
		this.props.changeTeam(team);
		this.toggleDropdown();
	},
	toggleDropdown() {
		const { dropdownOpen } = this.state;
		this.setState({ dropdownOpen: !dropdownOpen })
	},
	adjustMeter(rating) {
		var meterColor;
		if (rating < 50) {
			meterColor = '229, 57, 53';
		} else {
			meterColor = rating < 75 ? '243, 182, 0' : '35, 182, 53';
		}
		rating = rating < 10 ? rating += '0' : rating;
		return {
			backgroundColor: `rgb(${meterColor})`,
			WebkitTransform: `scale3d(.${rating}, 1, 1)`,
			transform: `scale3d(.${rating}, 1, 1)`
		};
	}
});

export default TeamPanel;