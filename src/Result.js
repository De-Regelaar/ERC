import React from 'react';

import {Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

class Result extends React.Component
{
	render () 
	{
		return (
			<Table>
        <TableHead> 
        	<TableRow>
        		<TableCell />
        		<TableCell colspan={3}>Man</TableCell>
        		<TableCell colspan={1}>Vrouw</TableCell>
        		<TableCell colspan={2}>Wasbak</TableCell>
        	</TableRow>
          <TableRow>
            <TableCell />
            <TableCell >WC</TableCell>
            <TableCell >Urinoir</TableCell>
            <TableCell >Plasgoot (m)</TableCell>
            <TableCell >WC</TableCell>
            <TableCell >Man</TableCell>
            <TableCell >Vrouw</TableCell>
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