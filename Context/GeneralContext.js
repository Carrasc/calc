import React, { createContext, useEffect, useState } from 'react';

export const GeneralContext = createContext();

export default function GeneralProvider({ children }) {
	const [generalValue, setGeneralValue] = useState({});
	const [gender, setGender] = useState({
		type: '',
		son: '',
		value: 0,
	});
	const [typeOfProject, setTypeOfProject] = useState({
		title: '',
		value: 0,
	});
	const [surface, setSurface] = useState({
		value: 0,
	});
	const [lag_margin, set_lag_margin] = useState({
		estado: '',
		municipio: '',
		value: 0,
		title: '',
	});
	const [plan, setPlan] = useState({
		item: {},
		value: 0,
		id: '',
	});
	const [times, setTimes] = useState({
		value: 0,
	});

	console.log({ times });
	return (
		<GeneralContext.Provider
			value={{
				generalValue,
				setGeneralValue,
				setGender,
				gender,
				typeOfProject,
				setTypeOfProject,
				surface,
				setSurface,
				lag_margin,
				set_lag_margin,
				plan,
				setPlan,
				times,
				setTimes,
			}}
		>
			{children}
		</GeneralContext.Provider>
	);
}
