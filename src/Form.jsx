import React, { useState } from 'react';
import { useDispatch, useSelector, batch } from 'react-redux';


export default function Form() {
	const name = useSelector(state => state.name);
	const fam = useSelector(state => state.fam);

	const [actionName, setActionName] = useState(name);
	const [actionFam, setActionFam] = useState(fam);

	const setName = (e) => {
		setActionName(e.target.value);
	}
	const setFam = (e) => {
		setActionFam(e.target.value);
	}

	const dispatch = useDispatch();

	const changeName = (data) => {
		dispatch({ type: "change_name", payload: data })
	}

	const changeFam = (data) => {
		dispatch({ type: "change_fam", payload: data })
	}

	const changeParam = (data)=>{
		dispatch({ type: "change_param", payload: data })
	}
	const change = () => {
		changeParam({name:actionName,fam:actionFam});

	}
	return (
		<div>
			<input type="text" value={actionName} onChange={setName} />
			<input type="text" value={actionFam} onChange={setFam} />
			<button onClick={change}>OK</button>

		</div>
	)
}
