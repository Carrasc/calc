import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import extraInstalation from '../Data/IC.json';
import { GeneralContext } from '../Context/GeneralContext';

const extraComponents = [
	{
		value: 'AA',
		label: 'Aire Acondicionado',
	},
	{
		value: 'VE',
		label: 'Ventilacion y Extraccion',
	},
	{
		value: 'GM',
		label: 'Gases Medicinales',
	},
	{
		value: 'PCI',
		label: 'Proteccion Contra Incendios (PCI)',
	},
	{
		value: 'SCA',
		label: 'Sistema de Control de accesos',
	},
	{
		value: 'SVD',
		label: 'Sistema de Voz y Datos',
	},
	{
		value: 'CCTV',
		label: 'Sistema de CCTV',
	},
];

export default function ExtraComponents() {
	const { scopes, set_scopes } = React.useContext(GeneralContext);
	const handleChange = (event, item) => {
		const temp_array = [...scopes];
		if (event.target.checked) {
			temp_array.push(item.label);
			set_scopes(temp_array);
		} else {
			const index = temp_array.indexOf(item.label);
			if (index > -1) {
				// only splice array when item is found
				temp_array.splice(index, 1); // 2nd parameter means remove one item only
				set_scopes(temp_array);
			}
		}
	};
	return (
		<div>
			<p className="text-center mb-6 font-[Montserrat-bold] text-sm ">
				¿Que alcances extras se tienen en consideracion?
			</p>
			<div className="grid grid-cols-3">
				{extraInstalation.map((item, index) => (
					<div key={index} className="flex justify-items-end">
						<FormControlLabel
							label={item.label}
							control={
								<Checkbox
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
