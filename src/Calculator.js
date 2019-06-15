import React from 'react';

import {Grid, Typography, TextField, FormControlLabel, Checkbox, Divider} from '@material-ui/core';
import Result from "./Result.js";

class Calculator extends React.Component
{
	constructor (props) 
	{
		super(props);

		this.state = {
			visitors: 20000,
			participants: 100,
			personnel: 100,
			female: 55,
			duration: 9,
			alcohol: true
		};

		this.handlePeopleChange = this.handlePeopleChange.bind(this);
		this.handleFemaleChange = this.handleFemaleChange.bind(this);
		this.handleDurationChange = this.handleDurationChange.bind(this);
		this.handleAlcoholChange = this.handleAlcoholChange.bind(this);
	}

	handlePeopleChange (event) 
	{
		if (!isNaN(parseInt(event.target.value))) 
		{
			this.setState({[event.target.name]: parseInt(event.target.value)});
		}
	}

	handleFemaleChange (event)
	{
		const value = parseInt(event.target.value)

		if (!isNaN(value) && value >= 0 && value <= 100)
		{
			this.setState({female: event.target.value});
		}
	}

	handleDurationChange (event)
	{
		if (!isNaN(parseInt(event.target.value))) 
		{
			this.setState({"duration": parseInt(event.target.value)});
		}
	}

	handleAlcoholChange (event) 
	{
		this.setState({"alcohol": event.target.checked});
	}

	render () 
	{
		const t = this.state.visitors + this.state.participants + this.state.personnel
		const male = t * (100 - this.state.female) * 0.01;
		const female = t * this.state.female * 0.01;

		const aus_duration_modifier = this.state.duration >= 8 ? 1 : 
																	this.state.duration >= 6 ? 0.8 :
																	this.state.duration >= 4 ? 0.75 :
																	0.7;
		const aus_alcohol_modifer = this.state.alcohol ? 1 : 0.5;
		const aus_modifier = aus_duration_modifier * aus_alcohol_modifer;

		let uk_modifier = {};
		if (this.state.duration >= 6 && this.state.alcohol) 
		{
			uk_modifier.wc_male = 400;
			uk_modifier.urinoir_male = 100;
			uk_modifier.wc_female = 75;
		}
		else if (this.state.duration >= 6)
		{
			uk_modifier.wc_male = 425;
			uk_modifier.urinoir_male = 125;
			uk_modifier.wc_female = 85;		
		}
		else 
		{
			uk_modifier.wc_male = 500;
			uk_modifier.urinoir_male = 150;
			uk_modifier.wc_female = 100;
		}

		let australia = {
			name: "Australisch Model",
			men_wc: Math.round((male / 500) * aus_modifier),
			men_urinoir: Math.round((((male / 500) * 3) * ((100 -this.state.female) * 0.02)) * aus_modifier),
			men_plasgoot: Math.round(((male / 500) * 1.5) * aus_modifier),
			women_wc: Math.round((female / 100) * aus_modifier),
			men_wasbak: Math.round((male / 500) * aus_modifier),
			women_wasbak: Math.round((female / 500) * aus_modifier)
		};

		const uk = {
			name: "UK Model",
			men_wc: Math.round(male / uk_modifier.wc_male),
			men_urinoir: Math.round(male / uk_modifier.urinoir_male),
			men_plasgoot: Math.round((male / uk_modifier.urinoir_male) / 2),
			women_wc: Math.round(female / uk_modifier.wc_female),
			men_wasbak: Math.round((male / uk_modifier.wc_male) / 10),
			women_wasbak: Math.round((female / uk_modifier.wc_female) / 10)
		};

		const uk_campsite = {
			name: "UK Kampeerterrein",
			men_wc: Math.round(male / 150),
			men_urinoir: Math.round(male / 250),
			men_plasgoot: Math.round(male / 500),
			women_wc: Math.round(female / 75),
			men_wasbak: Math.round(male / 1500),
			women_wasbak: Math.round(female / 750)
		};

		return (
			<React.Fragment>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h5">Toilet Calculator </Typography>
					</Grid>
					<Grid item xs={12}>
						<TextField 
							id="visitors"
							name="visitors"
							label='Aantal Bezoekers' 
							type="number"
							fullWidth
							value = {this.state.visitors} 
							onChange={this.handlePeopleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField 
							id="participants"
							name="participants"
							label='Aantal Deelnemers' 
							type="number"
							fullWidth
							value = {this.state.participants} 
							onChange={this.handlePeopleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField 
							id="personnel"
							name="personnel"
							label='Aantal Personeel' 
							type="number"
							fullWidth
							value = {this.state.personnel} 
							onChange={this.handlePeopleChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField 
							label = "Totaal Mensen"
							fullWidth
							disabled
							value={t}/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label = "% Vrouw / GN"
							type = "number"
							fullWidth
							value = {this.state.female}
							onChange = {this.handleFemaleChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label = "% Man"
							type = "number"
							fullWidth
							disabled
							value = {100 - this.state.female}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField 
							id="duration"
							name="duration"
							label='Duur van Evenement (in uren)' 
							type="number"
							fullWidth
							value = {this.state.duration} 
							onChange={this.handleDurationChange}
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
		        	control={
			          <Checkbox
			            checked={this.state.alcohol}
			            onChange={this.handleAlcoholChange}
			            value="checkedB"
			            color="primary"
			          />
			        }
			        label="Redelijk veel Drank"
		      	/>
	      	</Grid>
				</Grid>
	      <Divider variant="middle"/>	
	      <Grid container spacing={2}>
	      	<Grid item xs={12}>
	      		<Typography variant="h5">Uitkomst</Typography>
	      	</Grid>
	      	<Grid item xs={12}>
	      		<Result rows={[australia, uk, uk_campsite]} />
	      	</Grid>
	      </Grid>
	     </React.Fragment>
		)
	}
}

export default Calculator;