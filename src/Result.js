import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




class Result extends React.Component
{
	render () 
	{
		return (
        
        <Table size="small">
        <TableHead> 
        	<TableRow>
        		<TableCell />
        		<TableCell colspan={3}>Man</TableCell>
        		<TableCell colspan={1}>Vrouw / GN</TableCell>
        		<TableCell colspan={2}>Wasbak</TableCell>
        	</TableRow>
          <TableRow>
            <TableCell />
            <TableCell >WC</TableCell>
            <TableCell >EN Urinoir</TableCell>
            <TableCell >OF Plasgoot (meter)</TableCell>
            <TableCell >WC</TableCell>
            <TableCell >Man</TableCell>
            <TableCell >Vrouw / GN</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.rows.map(row => (
            <TableRow key={row.method}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.men_wc}</TableCell>
              <TableCell>{row.men_urinoir}</TableCell>
              <TableCell>{row.men_plasgoot}</TableCell>
              <TableCell>{row.women_wc}</TableCell>
              <TableCell>{row.men_wasbak}</TableCell>
              <TableCell>{row.women_wasbak}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
    )
  }
}

export default Result;