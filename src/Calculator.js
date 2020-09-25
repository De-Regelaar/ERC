import React from 'react';

import {Grid, Typography, TextField, FormControlLabel, Checkbox, Divider} from '@material-ui/core';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Result from "./Result.js";

class Calculator extends React.Component
{
	constructor (props) 
	{
		super(props);

		this.state = {
			bezoekers: 100,
			gezelschap: 10,
			binnen: false,
			doorstroom: false,
			terras: false,
		};

	
		this.handleBezoekersChange = this.handleBezoekersChange.bind(this);
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
		this.setState({"binnen": event.target.checked});
	}

	handleDoorstroomChange (event) 
	{
		this.setState({"doorstroom": event.target.checked});
	}

	handleTerrasChange (event) 
	{
		this.setState({"terras": event.target.checked});
	}

	render () 
	{
		
				
		let verboden = {		
			name: "Verboden?",
			uitkomst: (this.state.gezelschap >=50) && (this.state.veiligheidsregio>=199)?<Typography color='Secondary'>ja</Typography>:"nee",
			grens: "In regio's die in risiconiveau 2 vallen kunnen geen evenementen plaatsvinden met grote gezelschappen. Ook niet na een melding.",
		};

		const melding = {
			name: "Melding doen",
			uitkomst:(this.state.bezoekers >=50) && (this.state.veiligheidsregio>=199)?<Typography color='Secondary'>ja</Typography>:"nee",
			grens: "50 of meer bezoekers in regio's in risiconiveau 2.",
		};

		const placeren = {
			name: "Bezoeker placeren",
			uitkomst: ((this.state.bezoekers>=250) && (this.state.binnen<1) && (this.state.doorstroom<1)) 
			|| ((this.state.binnen>=1) && (this.state.doorstroom<1))
			|| (this.state.terras>=1)?<Typography color='Secondary'>ja</Typography>:"nee",
			grens: "Binnen moet bij alle aantallen worden geplaceerd. Buiten is dat verplicht vanaf 250 bezoekers. Voor beide is er een uitzondering in het geval van continue doorstroom.",
		};
		const check = {
			name: "Gezondheidscheck",
			uitkomst: ((this.state.bezoekers>=250) && (this.state.binnen<1) && (this.state.doorstroom<1))
			 || ((this.state.bezoekers>=100) && (this.state.binnen>=1) && (this.state.doorstroom<1))
			 || (this.state.terras>=1) ? <Typography color='Secondary'>ja</Typography>:"nee",
			grens: "Binnen vanaf 100 bezoekers, buiten bij vanaf 250. Bij doorstroom evenement nooit.",
		};
		return (
			<React.Fragment>
				<Grid container spacing={2} 
				justify="flex-start">
					<Grid item xs={12}>
						<Typography variant="h4">Covid-19 -Verplichtingen rond evenementen</Typography>
						
					</Grid>
					<Grid item xs={12}>
						<Typography color='primary'>Versie 25 september 2020 </Typography>
						<Typography variant="body2" color='secondary'> Dit formulier is een hulpmiddel, er kunnen geen rechten ontleend worden aan de uitslag. </Typography>
						<Typography variant="body2" color='secondary'> In verschillende regio's kunnen aanvullende maatregelen gelden die niet in dit formulier zijn opgenomen. </Typography>
						<Typography variant="body1" color='TextSecondary'> Vul het formulier volledig in voor het beste resultaat. </Typography>
					</Grid>
					<Grid item xs={12}
					align="left">
						<TextField 
							id="bezoekers"
							name="bezoekers"
							label='Totaal aantal bezoekers' 
							type="number"
							fullWidth
							value = {this.state.bezoekers} 
							onChange={this.handleBezoekersChange}
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
						/>
					</Grid>
					
					<Grid item xs={12}
					align="left">
												
						 <FormControl required>
        <InputLabel id="VR">Veiligheidsregio</InputLabel>
        <Select
          labelId="veiligheidsregio"
          id="veiligheidsregio"
          value={this.state.veiligheidsregio}
          onChange={this.handleVeiligheidsregioChange}
                  >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          <MenuItem value={100 }>	    Amsterdam-Amstelland		</MenuItem>
<MenuItem value={200 }>	    Brabant-Noord		</MenuItem>
<MenuItem value={201 }>	    Brabant-Zuidoost		</MenuItem>
<MenuItem value={4 }>	    Drenthe		</MenuItem>
<MenuItem value={202 }>	    Flevoland		</MenuItem>
<MenuItem value={6 }>	    Friesland		</MenuItem>
<MenuItem value={7 }>	    Gelderland-Midden		</MenuItem>
<MenuItem value={203 }>	    Gelderland-Zuid		</MenuItem>
<MenuItem value={204 }>	    Gooi en Vechtstreek		</MenuItem>
<MenuItem value={10 }>	    Groningen		</MenuItem>
<MenuItem value={205 }>	    Haaglanden		</MenuItem>
<MenuItem value={206 }>	    Hollands Midden		</MenuItem>
<MenuItem value={13 }>	    IJsselland		</MenuItem>
<MenuItem value={207 }>	    Kennemerland		</MenuItem>
<MenuItem value={15 }>	    Limburg-Noord		</MenuItem>
<MenuItem value={16 }>	    Midden- en West-Brabant		</MenuItem>
<MenuItem value={17 }>	    Noord- en Oost-Gelderland		</MenuItem>
<MenuItem value={18 }>	    Noord-Holland Noord		</MenuItem>
<MenuItem value={208 }>	    Rotterdam-Rijnmond		</MenuItem>
<MenuItem value={20 }>	    Twente		</MenuItem>
<MenuItem value={209 }>	    Utrecht		</MenuItem>
<MenuItem value={210 }>	    Zaanstreek-Waterland		</MenuItem>
<MenuItem value={23 }>	    Zeeland		</MenuItem>
<MenuItem value={211 }>	    Zuid-Holland Zuid		</MenuItem>
<MenuItem value={25 }>	    Zuid-Limburg		</MenuItem>
        </Select>
        <FormHelperText>In welke Veiligheidsregio vindt het plaats?</FormHelperText>
      </FormControl>

		
					</Grid>


					<Grid item xs={12}>
					<Typography variant="h6">Is er op het evenement sprake van een hieronder staande situatie? </Typography>
					</Grid>
					<Grid item xs={12}
					align="left">
						<FormControlLabel
		        	control={
			          <Checkbox
			            checked={this.state.doorstroom}
			            onChange={this.handleDoorstroomChange}
			            value="checkedB"
			            color="primary"
			          />
			        }
			        label=<Typography variant="body2">Is er sprake van een evenement met continue doorstroom van publiek?</Typography>
		      	/>
	      	</Grid>

	      	<Grid item xs={12}
	      	align="left">
						<FormControlLabel
		        	control={
			          <Checkbox
			            checked={this.state.binnen}
			            onChange={this.handleBinnenChange}
			            value="checkedB"
			            color="primary"
			          />
			        }
			        label=<Typography variant="body2">Vindt het evenement binnen plaats?</Typography>
		      	/>
	      	</Grid>
			<Grid item xs={12}
				align="left">
						<FormControlLabel
		        	control={
			          <Checkbox
			            checked={this.state.terras}
			            onChange={this.handleTerrasChange}
			            value="checkedB"
			            color="primary"
			          />
			        }
			        label=<Typography variant="body2">Is er sprake van een buitenterras (eet- of drink gelegenheid)?</Typography>
		      	/>
	      	</Grid>

				</Grid>
	      <Divider variant="middle"/>	
	      <Grid container spacing={2}>
	      	<Grid item xs={12}>
	      		<Typography variant="h5">Resultaten</Typography>

	      		
	      	</Grid>
	      	<Grid item xs={12}>
	      		<Result rows={[verboden, melding, placeren, check]} />
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