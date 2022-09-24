import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import extraInstalation from '../Data/IC.json';
import { GeneralContext } from '../Context/GeneralContext';

export default function ExtraComponents() {
	const { scopes, set_scopes } = React.useContext(GeneralContext);
	// console.log({ scopes });
	const handleChange = (event, item) => {
		const temp_array = [...scopes];
		if (event.target.checked) {
			temp_array.push(item.value);
			set_scopes(temp_array);
		} else {
			const index = temp_array.indexOf(item.value);
			if (index > -1) {
				// only splice array when item is found
				temp_array.splice(index, 1); // 2nd parameter means remove one item only
				set_scopes(temp_array);
			}
		}
	};
	const checkValues = (item) => {
		const found = scopes.find((element) => element === item.value);
		if (found !== undefined) {
			return true;
		}
		return false;
	};
	return (
		<div className="py-10">
			<p className="text-center mb-2 font-[Montserrat-bold] text-sm text-miluno-white ">
				¿Que alcances extras se tienen en consideracion?
			</p>
			<p className="text-center mb-6 font-[Montserrat] text-xs text-miluno-white ">
				(Puede no seleccionar ninguno o varios)
			</p>
			<div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-3">
				{extraInstalation.map((item, index) => (
					<div key={index} className="flex justify-center">
						<FormControlLabel
							label={
								<span
									style={{
										fontSize: '14px',
										fontFamily: 'Montserrat',
										color: '#f3f3f3',
									}}
								>
									{item.label}
								</span>
							}
							control={
								<Checkbox
									checked={checkValues(item)}
									onChange={(e) => handleChange(e, item)}
									sx={{
										color: '#707070',
										'&.Mui-checked': {
											color: '#7AC279',
										},
									}}
								/>
							}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
