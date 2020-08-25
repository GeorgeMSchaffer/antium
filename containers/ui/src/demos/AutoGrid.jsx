import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const classes = {
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: 20,
		textAlign: 'center',
	},
};

export default function AutoGridDemo() {
	return (
		<div className={classes.root}>
			<h2>Auto Grid</h2>
			<Grid container spacing={2}>
				<Grid item xs>
					<Paper className={classes.paper}>xs</Paper>
				</Grid>
				<Grid item xs>
					<Paper className={classes.paper}>xs</Paper>
				</Grid>
				<Grid item xs>
					<Paper className={classes.paper}>xs</Paper>
				</Grid>
			</Grid>
			<Grid container spacing={2}>
				<Grid item xs>
					<Paper className={classes.paper}>xs</Paper>
				</Grid>
				<Grid item xs>
					<Paper className={classes.paper}>xs</Paper>
				</Grid>
				<Grid item xs={9}>
					<Paper className={classes.paper}>xs=9</Paper>
				</Grid>
			</Grid>
		</div>
	);
}
