const [name, setName] = useReducer((_, value) => value, 'James'); <
input value = {
	name
}
onChange = {
	e => setName(e.target.value)
}
/>