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
			uitkomst: (this.state.gezelschap >=50)?"ja":"nee",
			grens: "50 of meer personen in een gezelschap",
		};

		const melding = {
			name: "Melding doen",
			uitkomst:(this.state.bezoekers >=50) && (this.state.veiligheidsregio>=70)?"ja":"nee",
			grens: "50 of meer bezoekers in regio's in categorie 2",
		};

		const placeren = {
			name: "Bezoeker placeren",
			uitkomst: ((this.state.bezoekers>=250) && (this.state.binnen<1) && (this.state.doorstroom<1)) 
			|| ((this.state.binnen>=1) && (this.state.doorstroom<1))
			|| (this.state.terras>=1)?"ja":"nee",
			grens: "Binnen moet altijd worden geplaceerd. Buiten is dat verplict vanaf 250 bezoekers. Bij doorstroom evenement nooit.",
		};
		const check = {
			name: "Gezondheidscheck",
			uitkomst: ((this.state.bezoekers>=250) && (this.state.binnen<1) && (this.state.doorstroom<1))
			 || ((this.state.bezoekers>=100) && (this.state.binnen>=1) && (this.state.doorstroom<1))
			 || (this.state.terras>=1) ? "ja":"nee",
			grens: "Binnen vanaf 100 bezoekers, buiten bij vanaf 250. Bij doorstroom evenement nooit.",
		};
		return (
			<React.Fragment>
				<Grid container spacing={2} 
				justify="flex-start">
					<Grid item xs={12}>
						<Typography variant="h4">Corona regels bij evenementen </Typography>
						
					</Grid>
					<Grid item xs={12}>
						<TextField 
							id="bezoekers"
							name="bezoekers"
							label='Aantal bezoekers' 
							type="number"
							fullWidth
							value = {this.state.bezoekers} 
							onChange={this.handleBezoekersChange}
						/>
					</Grid>
				
					<Grid item xs={12}>
						<TextField 
							id="gezelschap"
							name="gezelschap"
							label='Maximale grote gezelschap' 
							type="number"
							fullWidth
							value = {this.state.gezelschap} 
							onChange={this.handleGezelschapChange}
						/>
					</Grid>
					
					<Grid item xs={12}
					justify="left">
												
						 <FormControl required>
        <InputLabel id="VR">Veiligheidsregio</InputLabel>
        <Select
          labelId="veiligheidsregio"
          id="veiligheidsregio"
          value={this.state.veiligheidsregio}
          onChange={this.handleVeiligheidsregioChange}
                  >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={100 }>	    Amsterdam-Amstelland		</MenuItem>
<MenuItem value={2 }>	    Brabant-Noord		</MenuItem>
<MenuItem value={3 }>	    Brabant-Zuidoost		</MenuItem>
<MenuItem value={4 }>	    Drenthe		</MenuItem>
<MenuItem value={5 }>	    Flevoland		</MenuItem>
<MenuItem value={6 }>	    Friesland		</MenuItem>
<MenuItem value={7 }>	    Gelderland-Midden		</MenuItem>
<MenuItem value={8 }>	    Gelderland-Zuid		</MenuItem>
<MenuItem value={9 }>	    Gooi en Vechtstreek		</MenuItem>
<MenuItem value={10 }>	    Groningen		</MenuItem>
<MenuItem value={1100 }>	    Haaglanden		</MenuItem>
<MenuItem value={1200 }>	    Hollands Midden		</MenuItem>
<MenuItem value={13 }>	    IJsselland		</MenuItem>
<MenuItem value={1400 }>	    Kennemerland		</MenuItem>
<MenuItem value={15 }>	    Limburg-Noord		</MenuItem>
<MenuItem value={16 }>	    Midden- en West-Brabant		</MenuItem>
<MenuItem value={17 }>	    Noord- en Oost-Gelderland		</MenuItem>
<MenuItem value={18 }>	    Noord-Holland Noord		</MenuItem>
<MenuItem value={1900 }>	    Rotterdam-Rijnmond		</MenuItem>
<MenuItem value={20 }>	    Twente		</MenuItem>
<MenuItem value={2100 }>	    Utrecht		</MenuItem>
<MenuItem value={22 }>	    Zaanstreek-Waterland		</MenuItem>
<MenuItem value={23 }>	    Zeeland		</MenuItem>
<MenuItem value={24 }>	    Zuid-Holland Zuid		</MenuItem>
<MenuItem value={25 }>	    Zuid-Limburg		</MenuItem>
        </Select>
        <FormHelperText>In welke Veiligheidsregio vind het plaats?</FormHelperText>
      </FormControl>

		
					</Grid>


					<Grid item xs={12}>
					<Typography variant="h5">Is er op het evenement sprake van een hieronder staande situatie? </Typography>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
		        	control={
			          <Checkbox
			            checked={this.state.doorstroom}
			            onChange={this.handleDoorstroomChange}
			            value="checkedB"
			            color="primary"
			          />
			        }
			        label="Is er sprake van een evenement met doorstroom?"
		      	/>
	      	</Grid>

	      	<Grid item xs={12}>
						<FormControlLabel
		        	control={
			          <Checkbox
			            checked={this.state.binnen}
			            onChange={this.handleBinnenChange}
			            value="checkedB"
			            color="primary"
			          />
			        }
			        label="Vind het evenement binnen plaats?"
		      	/>
	      	</Grid>
<Grid item xs={12}>
						<FormControlLabel
		        	control={
			          <Checkbox
			            checked={this.state.terras}
			            onChange={this.handleTerrasChange}
			            value="checkedB"
			            color="primary"
			          />
			        }
			        label="Is er sprake van een buitenterras (eet- of drink gelegenheid)?"
		      	/>
	      	</Grid>

				</Grid>
	      <Divider variant="middle"/>	
	      <Grid container spacing={2}>
	      	<Grid item xs={12}>
	      		<Typography variant="h5">Uitkomst</Typography>

	      		
	      	</Grid>
	      	<Grid item xs={12}>
	      		<Result rows={[verboden, melding, placeren, check]} />
	      	</Grid>
	      </Grid>
	     </React.Fragment>
		)
	}
}

export default Calculator;