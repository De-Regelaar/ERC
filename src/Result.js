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
        		<TableCell colspan={1}></TableCell>
        		<TableCell colspan={1}></TableCell>
        		<TableCell colspan={2}></TableCell>
        		
        	</TableRow>
          
        </TableHead>
        <TableBody>
          {this.props.rows.map(row => (
            <TableRow key={row.method}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.uitkomst}</TableCell>
              <TableCell>{row.grens}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
    )
  }
}

export default Result;