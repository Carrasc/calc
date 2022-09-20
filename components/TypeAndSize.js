import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { alpha, styled } from '@mui/material/styles';

const typeOfProyects = [
	{
		value: 1,
		label: 'Obra nueva',
	},
	{
		value: 1.2,
		label: 'Ampliación',
	},
	{
		value: 1.25,
		label: 'Reacondicionamiento',
	},
	{
		value: 1.3,
		label: 'Rehabilitación',
	},
	{
		value: 1.5,
		label: 'Remodelación',
	},
];

const CustomTextField = styled(TextField)({
	'& .MuiInputBase-input': {
		fontFamily: 'Montserrat',
		textAlign: 'center',
	},
	'& label.Mui-focused': {
		color: 'green',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: '#7AC279',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: 'gray',
			borderRadius: '6px',
			borderWidth: '1px',
			color: 'green',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#7AC279',
		},
	},
});

export default function TypeAndSize() {
	const [typeOfProyect, setCurrency] = React.useState('EUR');

	const handleChangeType = (event) => {
		setCurrency(event.target.value);
		console.log(event.target.value);
	};

	const handleChangeSize = (event) => {
		console.log(event.target.value);
	};

	return (
		<Box component="form" noValidate autoComplete="off">
			<div className="grid grid-cols-1 gap-8">
				<div className="grid justify-items-center">
					<p className="text-center mb-4 font-[Montserrat-bold] text-sm ">
						¿Cual es la modalidad del proyecto?
					</p>
					<CustomTextField
						id="typeProject"
						select
						label=""
						value={typeOfProyect}
						onChange={handleChangeType}
						sx={{ width: 200, minWidth: 100 }}
						size="small"
					>
						{typeOfProyects.map((option) => (
							<MenuItem
								key={option.value}
								value={option.value}
								style={{
									fontSize: 14,
									fontFamily: 'Montserrat',
								}}
							>
								{option.label}
							</MenuItem>
						))}
					</CustomTextField>
				</div>

				<div className="grid justify-items-center">
					<p className="text-center mb-4 font-[Montserrat-bold] text-sm">
						¿Cuantos metros cuadrados?
					</p>
					<CustomTextField
						onChange={handleChangeSize}
						id="sizeOfProject"
						label=""
						type="number"
						sx={{ width: 200, minWidth: 100 }}
						size="small"
					/>
				</div>
			</div>
		</Box>
	);
}
