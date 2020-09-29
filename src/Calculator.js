import React from 'react';

import {Grid, Typography, TextField, FormControlLabel, Divider} from '@material-ui/core';

import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';

import Result from "./Result.js";

class Calculator extends React.Component
{
	constructor (props) 
	{
		super(props);

		this.state = {
			
			
			
			
		};

	
		this.handleBezoekersChange = this.handleBezoekersChange.bind(this);
		this.handleInruimteChange = this.handleInruimteChange.bind(this);
		this.handleGezelschapChange = this.handleGezelschapChange.bind(this);
		this.handleVeiligheidsregioChange = this.handleVeiligheidsregioChange.bind(this);
		this.handleBinnenChange = this.handleBinnenChange.bind(this);
		this.handleDoorstroomChange = this.handleDoorstroomChange.bind(this);
		this.handleTerrasChange = this.handleTerrasChange.bind(this);
	}

	
	handleBezoekersChange (event) 
	{
		if (!isNaN(parseInt(event.target.value))) 
		{
			this.setState({[event.target.name]: parseInt(event.target.value)});
		}
	}
	handleInruimteChange (event) 
	{
		if (!isNaN(parseInt(event.target.value))) 
		{
			this.setState({[event.target.name]: parseInt(event.target.value)});
		}
	}
	handleGezelschapChange (event)
	{
		if (!isNaN(parseInt(event.target.value))) 
		{
			this.setState({"gezelschap": parseInt(event.target.value)});
		}
	}	
	handleVeiligheidsregioChange (event) 
	{
		this.setState({"veiligheidsregio": event.target.value});
	}

	handleBinnenChange (event) 
	{
		this.setState({"binnen": event.target.value});
	}

	handleDoorstroomChange (event) 
	{
		this.setState({"doorstroom": event.target.value});
	}

	handleTerrasChange (event) 
	{
		this.setState({"terras": event.target.checked});
	}

	render () 
	{
		
				
		const verboden = {		
			name: "Verboden?",
			uitkomst: (this.state.doorstroom >= "3") || (this.state.gezelschap > 4) || ((this.state.inruimte >30) && (this.state.binnen === "binnen")) || ((this.state.bezoekers >40) && (this.state.binnen === "buiten") && (this.state.doorstroom >1))?<Typography color='Secondary'>ja</Typography>:"nee",
			grens: "Let op: voor sommige culturele gebouwen kan een ontheffing worden aangevraagd waardoor er wel meer dan 30 personen binnen mogen (per ruimte).",
		};	

		const ontheffing = {		
			name: "Ontheffing",
			uitkomst: ((this.state.inruimte >30) && (this.state.binnen === "binnen")) ?<Typography color='Secondary'>ja</Typography>:"nee",
			grens: "Voor meer dan 30 personen per ruimte (binnen) dient een ontheffing aangevraagd te worden. Dit kan voor 'panden die van groot belang zijn, bijvoorbeeld culturele instellingen'.",
		};	

		const maatwerk = {		
			name: "Maatwerk",
			uitkomst: (this.state.doorstroom <=1)?<Typography color='Secondary'>ja</Typography>:"nee",
			grens: "Voor doorstroom evenementen (binnen en buiten) dienen afspraken gemaakt te worden over het aantal personen per vierkante meter.",
		};	

		const placeren = {
			name: "Bezoeker placeren",
			uitkomst: (this.state.doorstroom >1)?<Typography color='Secondary'>ja</Typography>:"nee",
			grens: "Met uizondering van evenementen met een continue doorstroom dienen alle bezoekers geplaceerd te zijn.",
		};

		const check = {
			name: "Gezondheidscheck",
			uitkomst: ((this.state.inruimte>=100) && (this.state.binnen === "binnen") && (this.state.doorstroom >1)) ? <Typography color='Secondary'>ja</Typography>:"nee",
			grens: "Binnen vanaf 100 bezoekers. Door de verlaging van het aantal mensen buiten hoeft er buiten, of bij doorstroom evenementen geen gezondheidscheck te worden gedaan." ,
		};

		const reservering = {
			name: "Reservering",
			uitkomst: ((this.state.inruimte >100) && (this.state.binnen === "binnen")) || (this.state.doorstroom <=1) ? <Typography color='Secondary'>ja</Typography>:"nee",
			grens: "Binnen vanaf 100 bezoekers. Bij doorstroom evenementen moeten afspraken gemaakt worden over aantallen en tijdslots.",
		};


		return (
			<React.Fragment>
				<Grid container spacing={2} 
				justify="flex-start">
					<Grid item xs={12}>
						<Typography variant="h4">Covid-19 -Verplichtingen rond evenementen</Typography>
						
					</Grid>
					<Grid item xs={12}>
						<Typography color='primary'>Versie 2.0 gepubliceerd op 29 september 2020 </Typography>
						<Typography variant="body2" color='secondary'> Dit formulier is een hulpmiddel, er kunnen geen rechten ontleend worden aan de uitslag. </Typography>
						<Typography variant="body2" color='secondary'> In verschillende regio's kunnen aanvullende maatregelen gelden die niet in dit formulier zijn opgenomen. </Typography>
						<Typography variant="body1" color='TextSecondary'> Vul het formulier volledig in voor het beste resultaat. </Typography>
					</Grid>
					

					<Grid item xs={12}>
					<Typography variant="h6">Locatie en bezoekers aantallen</Typography>
					</Grid>

      	<Grid item xs={12}
	      	align="left">
						<FormControl component="fieldset">
      <FormLabel component="legend">Waar vindt het evenement plaats</FormLabel>
      <RadioGroup aria-label="Binnen" name="binnen" value={this.state.binnen} onChange={this.handleBinnenChange}>
        <FormControlLabel value="binnen" control={<Radio />} label="Binnen" />
        <FormControlLabel value="buiten" control={<Radio />} label="Buiten" />
      </RadioGroup>
    </FormControl>
	      	</Grid>
			
			
					<Grid item xs={12}
					align="left">
						<TextField 
							id="bezoekers"
							name="bezoekers"
							label='Totaal aantal bezoekers buitenevenement (incl kinderen, excl personeel)' 
							type="number"
							fullWidth
							value = {this.state.bezoekers} 
							onChange={this.handleBezoekersChange}
							disabled = {!this.state.binnen || this.state.binnen === "binnen"}
						/>
					</Grid>

			<Grid item xs={12}
					align="left">
						<TextField 
							id="inruimte"
							name="inruimte"
							label='Maximaal aantal bezoekers in een binnenruimte (incl kinderen, excl personeel)' 
							type="number"
							fullWidth
							value = {this.state.inruimte} 
							onChange={this.handleInruimteChange}
							disabled = {!this.state.binnen || this.state.binnen === "buiten"}
						/>
					</Grid>
				
					<Grid item xs={12}
					align="left">
						<TextField 
							id="gezelschap"
							name="gezelschap"
							label='Hoeveel personen in het grootste aanwezige gezelschap?' 
							type="number"
							fullWidth
							value = {this.state.gezelschap} 
							onChange={this.handleGezelschapChange}
							disabled = {!this.state.binnen}
						/>
					</Grid>
					
					
					<Grid item xs={12}>
					<Typography variant="h6">Is er op het evenement sprake van een hieronder staande situatie? </Typography>
					</Grid>
					

					<Grid item xs={12}
					align="left">
						<FormControl component="fieldset">
      <FormLabel component="legend">Type evenement</FormLabel>
      <RadioGroup aria-label="Doorstroom" name="doorstroom" value={this.state.doorstroom} onChange={this.handleDoorstroomChange}>
        <FormControlLabel value="1" control={<Radio />} label="Continue doorstroom van bezoekers" />
        <FormControlLabel value="2" control={<Radio />} label="Alle bezoekers zitten" />
        <FormControlLabel value="3" control={<Radio />} label="Bezoekers zitten maar er is sprake van roulatie" />
        
      </RadioGroup>
    </FormControl>
 <Divider variant="middle"/>
		      	</Grid>

	

				</Grid>
	      <Divider variant="middle"/>	
	      <Grid container spacing={2}>
	      	<Grid item xs={12}>
	      		<Typography variant="h5">Resultaten</Typography>

	      		
	      	</Grid>
	      	<Grid item xs={12}>
	      		<Result rows={[verboden, ontheffing, maatwerk, placeren, check, reservering]} />
	      	</Grid>
	      	<Grid item xs={12}>
	      		<Typography variant="subtitle" color="TextSecondary">Voor meer informatie over de definities en lokale regels wordt u verwezen naar de website van de relevante veiligheidsregio.</Typography>
	      	</Grid>
	      </Grid>
	     </React.Fragment>
		)
	}
}

export default Calculator;