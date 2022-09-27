import React, { createContext, useEffect, useState } from 'react';

export const GeneralContext = createContext();

export default function GeneralProvider({ children }) {
	const firstState = [
		{ checked: false },
		{ checked: false },
		{ checked: false },
		{ checked: false },
	];
	const [generalValue, setGeneralValue] = useState({});
	const [gender, setGender] = useState({
		type: '',
		son: '',
		value: 0,
		index: '',
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
		index: '',
	});
	const [times, setTimes] = useState({
		value: 0,
	});
	const [bim_selection, set_bim_selection] = useState({
		title: '',
		value: 0,
	});
	const [peopleSelected, setPeopleSelected] = useState([]);
	const [people, setPeople] = useState(firstState);

	const [scopes, set_scopes] = useState([]);
	const resetValues = () => {
		setGender({
			type: '',
			son: '',
			value: 0,
			index: '',
		});
		setTypeOfProject({
			title: '',
			value: 0,
		});
		setSurface({
			value: 0,
		});
		set_lag_margin({
			estado: '',
			municipio: '',
			value: 0,
			title: '',
		});
		setPlan({
			item: { titles: [] },
			value: 0,
			id: '',
			index: '',
		});
		setTimes({
			value: 0,
		});
		set_bim_selection({
			title: '',
			value: 0,
		});
		setPeopleSelected([]);
		set_scopes([]);
		setPeople(firstState);
	};
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
				peopleSelected,
				people,
				setPeople,
				setPeopleSelected,
				set_scopes,
				setPlan,
				setGeneralValue,
				setGender,
				setTypeOfProject,
				setSurface,
				set_lag_margin,
				setTimes,
				set_bim_selection,
				resetValues,
			}}
		>
			{children}
		</GeneralContext.Provider>
	);
}
