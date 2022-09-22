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
		item: { titles: [] },
		value: 0,
		id: '',
	});
	const [times, setTimes] = useState({
		value: 0,
	});
	const [bim_selection, set_bim_selection] = useState({
		title: '',
		value: 0,
	});
	const [scopes, set_scopes] = useState([]);

	return (
		<GeneralContext.Provider
			value={{
				generalValue,
				gender,
				typeOfProject,
				surface,
				lag_margin,
				plan,
				times,
				bim_selection,
				scopes,
				set_scopes,
				setPlan,
				setGeneralValue,
				setGender,
				setTypeOfProject,
				setSurface,
				set_lag_margin,
				setTimes,
				set_bim_selection,
			}}
		>
			{children}
		</GeneralContext.Provider>
	);
}
