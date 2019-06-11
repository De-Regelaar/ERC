import React from 'react';

import {Grid, Typography, TextField, FormControlLabel, Checkbox, Divider} from '@material-ui/core';

class Calculator extends React.Component
{
	constructor (props) 
	{
		super(props);

		this.state = {
			visitors: 0,
			participants: 0,
			personnel: 0,
			male: 50,
			duration: 0,
			alcohol: false
		};

		this.handlePeopleChange = this.handlePeopleChange.bind(this);
		this.handleMaleChange = this.handleMaleChange.bind(this);
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

	handleMaleChange (event)
	{
		const value = parseInt(event.target.value)

		if (!isNaN(value) && value >= 0 && value <= 100)
		{
			this.setState({male: event.target.value});
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
							label = "% Man"
							type = "number"
							fullWidth
							value = {this.state.male}
							onChange = {this.handleMaleChange}
						/>
					</Grid>
					<Grid item xs={6}>
						<TextField
							label = "% Vrouw"
							type = "number"
							fullWidth
							disabled
							value = {100 - this.state.male}
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
			        label="Veel Alcohol"
		      	/>
	      	</Grid>
				</Grid>
	      <Divider variant="middle"/>	
	      <Grid container spacing={2}>
	      	<Grid item xs={12}>
	      		<Typography variant="h5">Uitkomst</Typography>
	      	</Grid>
	      </Grid>
	     </React.Fragment>
		)
	}
}

export default Calculator;