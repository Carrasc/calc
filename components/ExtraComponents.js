import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import extraInstalation from '../Data/IC.json';

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
