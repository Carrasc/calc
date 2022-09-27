import { useRouter } from 'next/router';
import React, { useContext, useEffect } from 'react';
import TableResult from '../components/TableResult';
import { GeneralContext } from '../Context/GeneralContext';

export default function Result() {
	const { value, setValue } = useContext(GeneralContext);
	const router = useRouter();
	useEffect(() => {
		if (!value) {
			router.push('/');
			// return <p></p>;
		}
	}, []);

	return (
		<TableResult
			// calculateVariables={calculateVariables}
			resetTable={() => {
				// setValue(undefined);
				console.log('jeje');
				router.push('/');
				// scroll_to_top();
			}}
			value={value}
			// surface_={surface.value}
			// gender_={gender.value}
			// typeOfProject_={typeOfProject.value}
			// lag_margin_={lag_margin.value}
			// plan_={plan.value}
			// scopes_={scopes}
			// bim_selection_={bim_selection.value}
			// times_={times.value}
			// peopleSelected_={peopleSelected.join(' + ') || null}
		/>
	);
}
