import React, { useReducer, useRef } from 'react';
import PropTypes from 'prop-types'
import { TextField,Button } from '@material-ui/core';



function UseReducerExample(props) {
	const [name, setName] = useReducer((_, value) => value, 'James');
	const nameInputRef = useRef();
	
	function handleSubmit(evt) {
		console.debug(' HANDLE SUBMIT', evt);
		setName(evt.target.value);
	}
	function handleChange(evt) {
		console.debug(' HANDLE SUBMIT', evt);
		setName(evt.target.value);
	}
	return (
		<form onSubmit = {handleSubmit}>
			<TextField name={'name'} ref={nameInputRef} id={'name'} value={name} onChange={handleChange} />
			<div>Name : {name}</div>
			<Button type="submit">Add Emperor</Button> 
		</form>
	)
}

UseReducerExample.propTypes = {

}

export default UseReducerExample;

